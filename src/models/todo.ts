import {
    Document, Model, Schema, model
} from 'mongoose';

export interface ITodo extends Document {
    title: string;
    description: string
};

interface ITodoModel extends Model<ITodo> { }

const schema = new Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String },
});

export const Todo: ITodoModel = model<ITodo, ITodoModel>('Todo', schema);

