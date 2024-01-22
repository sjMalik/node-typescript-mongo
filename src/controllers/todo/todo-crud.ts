import { RequestHandler } from 'express';
import Joi from 'joi';
import { relogRequestHandler } from '../../middleware/request-middleware';
import { Todo } from '../../models/todo';

export const addOrUpdateTodoSchema = Joi.object().keys({
    title: Joi.string().required()
});

const addTodoWrapper: RequestHandler = async (req, res) => {
    const { title } = req.body;

    const todo = new Todo({
        title
    });

    await todo.save();

    res.status(201).json(todo.toJSON());
};

const listTodoWrapper: RequestHandler = async (req, res) => {
    const todos = await Todo.find();
    res.send({ todos });
};

const getTodoWrapper: RequestHandler = async (req, res) => {
    const todoid = req.params.id;
    const todo = await Todo.findById(todoid);

    res.send({ todo });
}

const updateTodoWrapper: RequestHandler = async (req, res) => {
    const { title } = req.body;
    const filter = { _id: req.params.id };

    await Todo.findOneAndUpdate(filter, { title });

    res.status(200).send({ message: 'Successfully Updated' }).end();
}

const deleteTodoWrapper: RequestHandler = async (req, res) => {
    const filter = { _id: req.params.id };

    await Todo.deleteOne(filter);

    res.status(200).send({ message: 'Successfully deleted' }).end();
}

export const newTodo = relogRequestHandler(addTodoWrapper, { validation: { body: addOrUpdateTodoSchema } });
export const listTodo = relogRequestHandler(listTodoWrapper);
export const getTodo = relogRequestHandler(getTodoWrapper);
export const updateTodo = relogRequestHandler(updateTodoWrapper, { validation: { body: addOrUpdateTodoSchema } });
export const deleteTodo = relogRequestHandler(deleteTodoWrapper);