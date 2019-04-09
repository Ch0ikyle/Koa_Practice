import Router from 'koa-router';

const books = new Router();
import {list, create, deleted, replace, update} from './books.controller';

books.get('/', list);
books.post('/', create);
books.delete('/', deleted);
books.put('/', replace);
books.patch('/', update);

module.exports = books;