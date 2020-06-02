import Koa from 'koa';
import Router from '@koa/router';

const app = new Koa();
const router = new Router();

router.get('/', async ctx => {
  ctx.body = 'hello';
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('server is started!');
})