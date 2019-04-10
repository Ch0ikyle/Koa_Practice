import Router from 'koa-router';

const books = new Router();

// export const 를 이용해서 변수명을 통해 알아서 매칭
import {list, create, deleted, replace, update} from './books.controller';

books.get('/', list);
books.post('/', create);
books.delete('/', deleted);
books.put('/', replace);
books.patch('/', update);

module.exports = books;