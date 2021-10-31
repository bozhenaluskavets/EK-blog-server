// const jsonServer = require('json-server');
// const auth = require('json-server-auth');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');

// // const router2 = auth.router('db.json');
// // server.use(router2);

// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 5000;

// server.use(middlewares);
// server.use(auth);
// // router.use(auth);
// server.use(router);

// server.listen(port);

const jsonServer = require('json-server');
const authServer = require('json-server-auth');

// auth.router('db.json');
// console.log('???', authServer.defaults());

const server = jsonServer.create();
// server.use(authServer);
server.use(authServer[0]);
server.use(authServer[1]);
const middlewares2 = jsonServer.defaults();
const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();

const port = process.env.PORT || 5000;

server.use(middlewares);
server.use(middlewares2);
server.use(router);
server.listen(port);
