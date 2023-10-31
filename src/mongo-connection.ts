import { connect, connection } from 'mongoose';

export default class MongoConnection {
    private mongoURL;

    constructor(mongoUrl: string) {
        this.mongoURL = mongoUrl;
    }

    public async connectToDatabase(): Promise<void> {
        try {
            // Connect to the MongoDB server
            await connect(this.mongoURL);
        } catch (error) {
            throw error;
        }
    }

    public async closeDatabaseConnection(): Promise<void> {
        try {
            await connection.close();
        } catch (error) {
            throw error;
        }
    }
}
