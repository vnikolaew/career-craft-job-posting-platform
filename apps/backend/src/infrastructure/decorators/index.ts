import {ArgOptions, createMethodMiddlewareDecorator, createParameterDecorator} from "type-graphql";
import {MyContext} from "@types";
import {cacheControlFromInfo} from "@apollo/cache-control-types";
import _ from "lodash";
import {GraphQLEmailAddress} from "graphql-scalars";

/**
 * @decorator Returns the User Id from the context.
 * @constructor
 */
export function UserId() {
    return createParameterDecorator<MyContext>(async ({context}) => context.userId, {});
}

/**
 * @decorator Returns the Session Id from the context.
 * @constructor
 */
export function SessionId() {
    return createParameterDecorator<MyContext>(async ({context}) => context.sessionId, {});
}

/**
 * @decorator A helper decorator that sets the cache hint to 0.
 * @constructor
 */
export function NoCache() {
    return createMethodMiddlewareDecorator(async ({info}, next) => {
        const cacheControl = cacheControlFromInfo(info);
        cacheControl.setCacheHint({maxAge: 0});

        return next();
    });
}

/**
 * @decorator A helper decorator that exposes the queried field only if the user queried is the current user.
 * @constructor
 */
export function AuthorizedField(path: string = "id") {
    return createMethodMiddlewareDecorator<MyContext>(async ({root, context}, next) => {
        const userIdProp = _.get(root, path);
        if (userIdProp !== context.userId) return;

        return next();
    });
}


/**
 * @decorator A helper decorator for an email address parameter.
 * @constructor
 */
export function EmailAddress(argName: string = "email", opts?: ArgOptions) {
    return createParameterDecorator<MyContext>(({args}) => args[argName], {
        arg: {
            name: argName, typeFunc: of => GraphQLEmailAddress, options: {
                ...opts
            }
        }
    });
}


/**
 * @decorator A helper decorator for a string parameter.
 * @constructor
 */
export function StringP(argName: string = "string", opts?: ArgOptions) {
    return createParameterDecorator<MyContext>(({args}) => args[argName], {
        arg: {
            name: argName,
            typeFunc: of => String, options: {
                nullable: false,
                description: `${argName} parameter`,
                ...opts
            }
        }
    });
}
