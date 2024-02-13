import morgan from 'morgan';
import express from 'express';
import {Router} from 'express';

const app = express();
const router = Router();
const todos = [];
const corsConfig = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
};

const errorCatcher = (err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
};

router.get('/todo', (req, res) => {
  res.json(todos);
});
router.post('/todo', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.json(todos);
});
router.put('/todo/:id', (req, res) => {
  const {id} = req.params;
  const todo = req.body;
  todos[id] = todo;
  res.json(todos);
});
router.delete('/todo/:id', (req, res) => {
  const {id} = req.params;
  todos.splice(id, 1);
  res.json(todos);
});

app.use(express.json());
app.use(morgan('dev'));
app.use(corsConfig);
app.use('/api', router);
app.use(errorCatcher);

app.listen(3000, () => {
  console.log(`Server raised in: http://localhost:${3000}`);
});
