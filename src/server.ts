import dotenv from 'dotenv';

const result = dotenv.config();
if (result.error) {
    dotenv.config({ path: '.env' })
}

import { app } from './app';
import MongoConnection from './mongo-connection';
import { logger } from './logger';

if (process.env.MONGO_URL == null) {
    logger.log({
        level: 'error',
        message: 'Mongo Url not specified in environment'
    });
} else {
    const mongoConnection = new MongoConnection(process.env.MONGO_URL);
    mongoConnection.connectToDatabase().then(() => {
        logger.log({
            level: 'info',
            message: `Connected to MongoDB`
        });
        app.listen(app.get('port'), (): void => {
            console.log(`Express server started @ http://localhost:${app.get('port')}`);
        })
    }).catch(error => {
        logger.log({
            level: 'error',
            message: `Could not connect to MongoDB`,
            error
        });
    })


    // Close the Mongoose connection, when receiving SIGINT
    process.on('SIGINT', () => {
        logger.info('Gracefully shutting down');
        mongoConnection.closeDatabaseConnection().then(() => { }).catch(error => {
            logger.log({
                level: 'error',
                message: 'Error shutting closing mongo connection',
                error: error
            });
        });
        process.exit(0);
    });
}



