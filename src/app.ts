import express, { Request, Response, NextFunction } from 'express';
import { ApplicationError } from './errors/application-error';
import { router } from './routes';
import cors from 'cors';

export const app = express();

app.use(express.json());
// Enable CORS for all routes
app.use(cors());
app.set('port', process.env.PORT || 3000);

app.use('/api', router);

app.use((err: ApplicationError, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
        return next(err);
    }

    return res.status(err.status || 500).json({
        error: process.env.NODE_ENV === 'development' ? err : undefined,
        message: err.message
    });
});