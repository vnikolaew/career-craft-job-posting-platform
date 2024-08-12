import { User } from "@generated/models/User";
import { UserRelationsResolver } from "@generated/resolvers/relations/index";
import {
   Arg,
   Authorized,
   Ctx,
   Field,
   FieldResolver,
   InputType,
   Int,
   Mutation,
   ObjectType,
   Query,
   Resolver,
   Root,
   Subscription,
   SubscribeResolverData, ID,
} from "type-graphql";
import { MyContext, Nullable } from "@types";
import { getUserCookie, lucia } from "@lib/auth";
import { getGravatarImageUrl } from "@modules/user/utils";
import { AuthorizedField, NoCache, SessionId, UserId } from "src/infrastructure/decorators";
import { GraphQLUpload, Upload } from "@infrastructure/scalars/Upload";
import { JsonValue } from "@prisma/client/runtime/library";

@InputType()
export class UserSignUpInput implements Partial<User> {
   @Field(() => String)
   public email: string = ``;

   @Field(() => String)
   public username: string = ``;

   @Field(() => String)
   public password: string = ``;
}

@InputType()
export class UserSignInInput extends UserSignUpInput {
}

@ObjectType()
export class UserSearchResponse extends User {
}

@InputType()
export class UsersSearchInput {
   @Field(() => String)
   public search: string = ``;

   @Field(() => Int)
   public limit: number = 10;
}


@ObjectType()
export class UserCookiePreferences {
   @Field(() => Boolean)
   Necessary: boolean;

   @Field(() => Boolean)
   Statistics: boolean;

   @Field(() => Boolean)
   Functionality: boolean;

   @Field(() => Boolean)
   Marketing: boolean;
}


export function asyncIteratorToIterable<T>(asyncIterator: AsyncIterator<T>): AsyncIterable<T> {
   return {
      [Symbol.asyncIterator]() {
         return asyncIterator;
      },
   };
}

export const DEFAULT_USER_AVATAR_URL = `https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg`;

@Resolver(of => User)
export class UserResolver extends UserRelationsResolver {

   @Subscription(() => User, { subscribe: async ({ context }: SubscribeResolverData<any, any, MyContext>) => asyncIteratorToIterable(context.pubSub.asyncIterator<User>(`USER_SIGNED_UP`)) })
   public async userSignedUp(): Promise<unknown> {
      return Promise.resolve();
   }

   @Subscription(() => Int, {
      subscribe: async ({ context }: SubscribeResolverData<any, any, MyContext>) => {
         console.log(`we are here`);
         return asyncIteratorToIterable(context.pubSub.asyncIterator<number>(`RANDOM_NUMBER`));
      },
   })

   public async* randomNumber(@Ctx() { pubSub }: MyContext): AsyncGenerator<number> {
      for await (const element of asyncIteratorToIterable(pubSub.asyncIterator(`RANDOM_NUMBER`))) {
         yield (element as any).number as number;
      }
   }

   @Query(() => User)
   public async findById(@Arg("id", () => String) id: string, @Ctx() { prisma }: MyContext): Promise<User> {
      return await prisma.user.findUnique({ where: { id } });
   }

   @FieldResolver(_ => ID, { nullable: false })
   public async id(@Root() user: User): Promise<string> {
      return user.id ?? ``;
   }

   @FieldResolver(_ => Object, { nullable: true })
   public async metadata(@Root() user: User): Promise<JsonValue> {
      return user.metadata ?? {};
   }

   @FieldResolver(_ => Date, { nullable: true })
   @AuthorizedField()
   public async emailVerified(@Root() user: User): Promise<Date> {
      return user.emailVerified ?? null!;
   }

   @FieldResolver(_ => String, { nullable: true })
   public async image(@Root() user: User): Promise<JsonValue> {
      return user.image ?? DEFAULT_USER_AVATAR_URL;
   }

   @FieldResolver(_ => Boolean)
   @AuthorizedField()
   public async cookieConsent(@Root() user: User): Promise<boolean> {
      return user?.metadata?.[`cookie-consent`] ?? false;
   }

   @FieldResolver(_ => UserCookiePreferences, { nullable: true })
   @AuthorizedField()
   public async cookiePreferences(@Root() user: User, @Ctx() {}: MyContext): Promise<UserCookiePreferences> {
      return user?.metadata?.[`cookie-preferences`] as UserCookiePreferences ?? {
         Necessary: true,
         Statistics: false,
         Functionality: false,
         Marketing: false,
      };
   }

   @Mutation(() => Boolean)
   public async fileUpload(@Arg("file", () => GraphQLUpload) file: Upload, @Ctx() { prisma }: MyContext): Promise<boolean> {
      return true;
   }

   @Query(() => User, { nullable: true })
   @NoCache()
   public async me(@Ctx() { prisma }: MyContext, @UserId() userId: string): Promise<Nullable<User>> {
      if (!userId) return null;
      return await prisma.user.findUnique({ where: { id: userId } });
   }

   @Authorized()
   @Mutation(() => Boolean)
   public async signOut(@Ctx() { res }: MyContext, @SessionId() sessionId: string): Promise<boolean> {
      try {
         const sessionCookie = lucia.createBlankSessionCookie();
         res.appendHeader(`Set-Cookie`, sessionCookie.serialize());

         if (sessionId?.length) await lucia.invalidateSession(sessionId);
         return true;
      } catch (err) {
         return false;
      }
   }

   @Query(() => [UserSearchResponse])
   public async search(@Arg("search", () => UsersSearchInput, { defaultValue: { search: ``, limit: 10 } }) {
      search,
      limit,
   }: UsersSearchInput, @Ctx() { prisma }: MyContext): Promise<UserSearchResponse[]> {
      let users = await prisma.user.findMany({
         where: {
            name: {
               contains: search,
               mode: `insensitive`,
            },
         },
         take: limit,
      });

      return users;
   }

   @Mutation(() => User)
   public async signUp(@Arg("signUpModel", () => UserSignUpInput) userInput: UserSignUpInput, @Ctx() {
      prisma,
      res,
      pubSub,
   }: MyContext): Promise<User> {
      const { email, password, username } = userInput;

      const existing = await prisma.user.findFirst({
         where: {
            email: email as string,
         },
      });
      if (existing) return null!;

      // Retrieve Gravatar image:
      let imageUrl = await getGravatarImageUrl(email as string);
      const user = await prisma.user.signUp(
         {
            email,
            password,
            username,
            image: imageUrl ?? DEFAULT_USER_AVATAR_URL,
         },
         { image: true },
      );

      const serializedCookie = await getUserCookie(user);
      res.appendHeader(`Set-Cookie`, serializedCookie);

      await pubSub.publish(`USER_SIGNED_UP`, user);
      return user;
   }

   @Mutation(() => User, { nullable: true })
   public async signIn(@Arg("signInModel", () => UserSignInInput) {
      password,
      username,
      email,
   }: UserSignInInput, @Ctx() { prisma, res }: MyContext): Promise<User | null> {
      const user = await prisma.user.findFirst({
         where: {
            OR: [
               {
                  email,
               },
               {
                  name: username,
               },
            ],
         },

      });

      if (user && user.verifyPassword?.(password as string ?? ``)) {
         const serializedCookie = await getUserCookie(user);
         res.appendHeader(`Set-Cookie`, serializedCookie);

         return user;
      }

      return null!;
   }
}