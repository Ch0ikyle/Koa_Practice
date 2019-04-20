import Router from 'koa-router';

const api = new Router();
import books from './books';
import auth from './auth'

api.use('/books', books.routes());
api.use('/auth', auth.routes());

export default api;