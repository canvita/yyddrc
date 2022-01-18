import Koa from 'koa'

const app = new Koa();

app.use(async ctx => {
  const path = ctx.request.path;
  switch (path) {
    case '123': {
      ctx.body = path;
    }
  }
});

app.listen(80);