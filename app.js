//app.js
const Koa = require('koa');
const app = new Koa();

const main = ctx => {
  ctx.response.body = 'Hello World';
};

app.use(main);

//setting localhost listener as localhost:3005
app.listen(3005);
