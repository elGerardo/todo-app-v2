import { Router, Request, Response } from "express";

const routes = Router();

routes.get('/live', async (_: Request, res: Response) => {
    res.send({ service: 'To Do', version: 1 });
})

export default routes