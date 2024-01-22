import {
    Document, Model, Schema, model
} from 'mongoose';

export interface ITodo extends Document {
    /** Title of Todo */
    title: string;
    /** Created On */
    createdOn: Date;
    /** Todo Completion Flag */
    isDone: boolean
}

interface ITodoModel extends Model<ITodo> { }

const schema = new Schema({
    title: { type: String, required: true, unique: true },
    createdOn: {
        required: true,
        type: Date,
        default: Date.now
    },
    isDone: {
        required: true,
        type: Boolean,
        default: false
    }
});

export const Todo: ITodoModel = model<ITodo, ITodoModel>('Todo', schema);

