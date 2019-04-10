import dotenv from 'dotenv';
dotenv.config();

import Koa from 'koa';
import Router from 'koa-router';

const app = new Koa();
const router = new Router();
import api from './api';

import mongoose from 'mongoose';
import bodyParser from 'koa-bodyparser';

// node에 자체적으로 있는 Promise를 사용하도록 설정
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true
}).then(
    (response) => {
        console.log('Successfully connected to mongodb');
    }
).catch(e => {
    console.error(e);
});

const PORT = process.env.PORT || 4000;

app.use(bodyParser());

router.use('/api', api.routes());
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
    console.log(`herum server is listening to port ${PORT}`);
});