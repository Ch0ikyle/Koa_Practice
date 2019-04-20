import Router from 'koa-router';
const auth = new Router();
import { localRegister, localLogin, exists, logout } from './auth.controller';

auth.post('/register/local', localRegister);
auth.post('/login/local', localLogin);
auth.get('/exists/:key(email|username)/:value', exists);
auth.post('/logout', logout);

export default auth;