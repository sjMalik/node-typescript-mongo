import { RequestHandler } from 'express';
import Joi from 'joi';
import { relogRequestHandler } from '../../middleware/request-middleware';
import { Todo } from '../../models/todo';

export const addOrUpdateTodoSchema = Joi.object().keys({
    title: Joi.string().required(),
    isDone: Joi.binary().optional()
});

const addTodoWrapper: RequestHandler = async (req, res) => {
    try {
        const { title } = req.body;

        const todo = new Todo({
            title
        });

        await todo.save();

        res.status(201).json(todo.toJSON());
    } catch (e) {
        res.status(500).end()
    }
};

const listTodoWrapper: RequestHandler = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.send({ todos });
    } catch (e) {
        res.status(500).end()
    }
};

const getTodoWrapper: RequestHandler = async (req, res) => {
    try {
        const todoid = req.params.id;
        const todo = await Todo.findById(todoid);

        res.send({ todo });
    } catch (e) {
        res.status(500).end()
    }
}

const updateTodoWrapper: RequestHandler = async (req, res) => {
    try {
        const { title, isDone } = req.body;
        const filter = { _id: req.params.id };

        await Todo.findOneAndUpdate(filter, { title, isDone });

        res.status(200).send({ message: 'Successfully Updated' }).end();
    } catch (e) {
        res.status(500).end()
    }
}

const deleteTodoWrapper: RequestHandler = async (req, res) => {
    try {
        const filter = { _id: req.params.id };

        await Todo.deleteOne(filter);

        res.status(200).send({ message: 'Successfully deleted' }).end();
    } catch (e) {
        res.status(500).end()
    }
}

export const newTodo = relogRequestHandler(addTodoWrapper, { validation: { body: addOrUpdateTodoSchema } });
export const listTodo = relogRequestHandler(listTodoWrapper);
export const getTodo = relogRequestHandler(getTodoWrapper);
export const updateTodo = relogRequestHandler(updateTodoWrapper, { validation: { body: addOrUpdateTodoSchema } });
export const deleteTodo = relogRequestHandler(deleteTodoWrapper);
