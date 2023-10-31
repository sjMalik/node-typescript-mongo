import {
    RequestHandler, Request, Response, NextFunction
} from 'express';
// import { ValidationError, ObjectSchema } from 'joi';
import { logger } from '../logger';

// const getMessageFromJoiError = (error: ValidationError): string | undefined => {
//     if (!error.details && error.message) {
//         return error.message;
//     }
//     return error.details && error.details.length > 0 && error.details[0].message
//         ? `PATH: [${error.details[0].path}] ;; MESSAGE: ${error.details[0].message}` : undefined;
// };

// interface HandlerOptions {
//     validation?: {
//         body?: ObjectSchema
//     },
//     skipJwtAuth?: boolean
// };

/**
 * This router wrapper catches any error from async await
 * and throws it to the default express error handler,
 * instead of crashing the app
 * @param handler Request handler to check for error
 */
export const relogRequestHandler = (
    handler: RequestHandler,
): RequestHandler => async (req: Request, res: Response, next: NextFunction) => {
    logger.log({
        level: 'info',
        message: req.url
    });

    return handler(req, res, next)
};