import { MongoClient } from 'mongodb';

export default class MongoConnection {
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
