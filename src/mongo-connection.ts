import { MongoClient } from 'mongodb';
import { logger } from './logger';

export default class mongoConnection {
    private mongoClient;

    constructor(mongoUrl: string) {
        this.mongoClient = new MongoClient(mongoUrl);
    }

    public async connectToDatabase(): Promise<void> {
        try {
            // Connect to the MongoDB server
            await this.mongoClient.connect();
        } catch (error) {
            throw error;
        }
    }

    public async closeDatabaseConnection(): Promise<void> {
        try {
            await this.mongoClient.close();
        } catch (error) {
            throw error;
        }
    }
}

// MongoDB connection URL
// const mongoURL = process.env.MONGO_URI;

// // Initialize a MongoDB client
// const mongoClient = new MongoClient(mongoURL);

// // Function to connect to the MongoDB database
// export async function connectToDatabase(): Promise<void> {
//     try {
//         // Connect to the MongoDB server
//         await mongoClient.connect();
//     } catch (error) {
//         throw error;
//     }
// }

// // Function to close the MongoDB connection
// export async function closeDatabaseConnection(): Promise<void> {
//     try {
//         await mongoClient.close();
//     } catch (error) {
//         logger.log({
//             level: 'error',
//             message: 'Error shutting closing mongo connection',
//             error: error
//         });
//         throw error;
//     }
// }
