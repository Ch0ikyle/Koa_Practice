import Router from 'koa-router';

const books = new Router();

// export const 를 이용해서 변수명을 통해 알아서 매칭
import {list, get, create, deleted, replace, update} from './books.controller';

books.get('/', list);
books.get('/:id', get);
books.post('/', create);
books.delete('/:id', deleted);
books.put('/:id', replace);
books.patch('/:id', update);

module.exports = books;