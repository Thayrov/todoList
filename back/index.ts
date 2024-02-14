import express, {Express, Request, Response, NextFunction} from 'express';
import {Router} from 'express';
import morgan from 'morgan';
import cors from 'cors';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const app: Express = express();
const router: Router = Router();
const todos: Todo[] = [];

const corsConfig: cors.CorsOptions = {
  origin: '*',
  credentials: true,
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
  methods: 'GET, POST, OPTIONS, PUT, DELETE',
};

const errorCatcher = (err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
};

router.get('/todo', (req: Request, res: Response) => {
  res.json(todos);
});

router.post('/todo', (req: Request, res: Response) => {
  const todo: Todo = req.body;
  todos.push(todo);
  res.json(todos);
});

router.put('/todo/:id', (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const todo: Todo = req.body;
  todos[id] = todo;
  res.json(todos);
});

router.delete('/todo/:id', (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  todos.splice(id, 1);
  res.json(todos);
});

app.use(express.json());
app.use(morgan('dev'));
app.use(cors(corsConfig));
app.use('/api', router);
app.use(errorCatcher);

app.listen(3000, () => {
  console.log(`Server raised in: http://localhost:${3000}`);
});
