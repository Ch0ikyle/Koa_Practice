import Koa from "koa";
const app = new Koa();

// app.use((ctx, next) => {
//     console.log(1);
//     const started = new Date();
//     next().then(() => {
//         console.log(new Date() - started + 'ms');
//     });
// });

app.use(async (ctx, next) => {
    console.log(1);
    const started = new Date();
    await next();
    console.log(new Date() - started + 'ms');
});

app.use((ctx, next) => {
    console.log(2);
    next(); 
});

app.use(ctx => {
    console.log(3);
    ctx.body = 'Hello Koa';
});

app.listen(4000, () => {
    console.log('heurm server is listening to port 4000');
});