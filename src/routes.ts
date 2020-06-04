import {Router} from 'express';

import userController from './controllers/userController';

const routes = Router();

routes.get('/index',userController.index);
routes.get('/index/create',userController.create);
export default routes;