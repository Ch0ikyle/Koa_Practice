import Router from 'koa-router';

const api = new Router();
import books from './books';

api.use('/books', books.routes());

module.exports = api;