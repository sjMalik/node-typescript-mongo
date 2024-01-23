import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import * as yamljs from 'yamljs';
import * as swaggerUi from 'swagger-ui-express';

import { ApplicationError } from './errors/application-error';
import { router } from './routes';

const swaggerJsDocs = yamljs.load('./src/api.yaml');

export const app = express();

app.use(express.json());
// Enable CORS for all routes
app.use(cors());
app.set('port', process.env.PORT || 3000);

app.use('/api', router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDocs));

app.use((err: ApplicationError, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
        return next(err);
    }

    return res.status(err.status || 500).json({
        error: process.env.NODE_ENV === 'development' ? err : undefined,
        message: err.message
    });
});