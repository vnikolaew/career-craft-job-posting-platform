import { createMethodMiddlewareDecorator, createParameterDecorator } from "type-graphql";
import { MyContext } from "@types";
import { cacheControlFromInfo } from "@apollo/cache-control-types";

/**
 * @decorator Returns the User Id from the context.
 * @constructor
 */
export function UserId() {
   return createParameterDecorator<MyContext>(async ({ context }) => context.userId, {});
}

/**
 * @decorator Returns the Session Id from the context.
 * @constructor
 */
export function SessionId() {
   return createParameterDecorator<MyContext>(async ({ context }) => context.sessionId, {});
}

/**
 * @decorator A helper decorator that sets the cache hint to 0.
 * @constructor
 */
export function NoCache() {
   return createMethodMiddlewareDecorator(async ({ info }, next) => {
      const cacheControl = cacheControlFromInfo(info);
      cacheControl.setCacheHint({ maxAge: 0 });

      return next();
   });
}