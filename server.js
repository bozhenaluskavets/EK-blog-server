const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json');

// const router2 = auth.router('db.json');
// server.use(router2);

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 5000;

server.use(middlewares);
server.use(auth);
// router.use(auth);
server.use(router);

server.listen(port);
