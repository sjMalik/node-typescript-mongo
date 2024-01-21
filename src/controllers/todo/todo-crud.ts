import { RequestHandler } from 'express';
import { relogRequestHandler } from '../../middleware/request-middleware';
import Joi from 'joi';
import { Todo } from '../../models/todo';

export const addTodoSchema = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string()
})

const allWrapper: RequestHandler = async (req, res) => {
    const todos = await Todo.find();
    res.send({ todos });
};

const createTodoWrapper: RequestHandler = async (req, res) => {
    const {
        title, description
    } = req.body;

    const todo = new Todo({
        title, description,
    });

    await todo.save();

    res.status(201).json(todo.toJSON());
}

const updateTodoWrapper: RequestHandler = async (req, res) => {
    const {
        title, description
    } = req.body;

    const filter = {
        _id: req.params.id,
    };

    await Todo.findOneAndUpdate(filter, { title, description });

    res.status(200).end();
}

const deleteTodoWrapper: RequestHandler = async (req, res) => {
    const filter = {
        _id: req.params.id,
    };

    await Todo.deleteOne(filter);

    res.status(200).end();
}

const findOneWrapper: RequestHandler = async (req, res) => {
    const todo = await Todo.findOne({ _id: req.params.id });
    res.send({ todo });
};

export const todos = relogRequestHandler(allWrapper);
export const todo = relogRequestHandler(findOneWrapper);
export const createTodo = relogRequestHandler(createTodoWrapper);
export const updateTodo = relogRequestHandler(updateTodoWrapper);
export const deleteTodo = relogRequestHandler(deleteTodoWrapper);