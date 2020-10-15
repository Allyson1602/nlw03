import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json()); // para entender JSON
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

// Rota = conjunto
// Recurso = users

// Metodos HTTP = GET, POST, PUT, DELETE

// GET = buscar uma informação (lista, item)
// POST = criando uma informação
// PUT = editando uma informação
// DELETE = deletando uma informação

// Parametros
// Query Params: http://localhost:3333/users?search=diego&page=2 // exemplo de usabilidade
// Route Params: http://localhost:3333/users/1 (identificar um recurso)
// Body: http://localhost:3333/users (muitas informações)

app.listen(3333); // localhost:3333
