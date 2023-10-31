import { RequestHandler } from 'express';
import { relogRequestHandler } from '../../middleware/request-middleware';
import { User } from '../../models/user';

const allWrapper: RequestHandler = async (req, res) => {
    const users = await User.find();
    res.send({ users });
};

export const all = relogRequestHandler(allWrapper);