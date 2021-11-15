// // Requires the package
// const { generateModel } = require('fake-data-generator');
// // Requires a model
// const model = require('./articlemodel.json');
// // Generate the model
// const amountArg = 50;
// const modelArg = model;
// const inputType = 'object';
// const outputType = 'object';
// const generatedModel = generateModel({
//   amountArg,
//   modelArg,
//   inputType,
//   outputType,
// });

var faker = require('faker');

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// "email": "olivier2@mail.com",
// "password": "$2a$10$PjxK1XEgkR/1htAcHR.n3eyhMsxF7ohTerKvpzjrMGiXELE9O.GnO",
// "firstname": "Olivier",
// "lastname": "Monge",
// "age": 32,
// "id": 1

// const users = [];
// for (let i = 0; i <= 21; i++) {
//   const firstname = faker.name.firstName();
//   const lastname = faker.name.lastName();
//   const user = {};
//   user.id = i + 1;
//   user.email = faker.internet.email(firstname, lastname).toLowerCase();
//   user.password =
//     '$2a$10$PjxK1XEgkR/1htAcHR.n3eyhMsxF7ohTerKvpzjrMGiXELE9O.GnO';
//   user.firstname = firstname;
//   user.lastname = lastname;
//   user.age = randomIntFromInterval(18, 55);

//   users.push(user);
// }

// console.log(JSON.stringify(users));

// const announcements = [];
// for (let i = 1; i < 25; i++) {
//   const announcement = {};
//   announcement.id = i + 1;
//   announcement.title = faker.lorem.sentence();
//   announcement.body = faker.lorem.sentences(randomIntFromInterval(1, 3));
//   announcement.userId = randomIntFromInterval(1, 21);
//   var date = new Date();
//   date.setDate(date.getDate() - Math.random(Math.random()) * +100);
//   announcement.createdAt = date.toISOString();
//   announcement.updatedAt = new Date().toISOString();

//   announcements.push(announcement);
// }

// console.log(JSON.stringify(announcements));

// const comments = [];
// for (let i = 0; i < 300; i++) {
//   const comment = {};
//   comment.id = i + 1;
//   comment.postId = randomIntFromInterval(1, 99);
//   comment.body = faker.lorem.sentences(randomIntFromInterval(1, 3));
//   comment.userId = randomIntFromInterval(1, 21);
//   var date = new Date();
//   date.setDate(date.getDate() - Math.random(Math.random()) * +100);
//   comment.createdAt = date.toISOString();
//   comment.updatedAt = new Date().toISOString();

//   comments.push(comment);
// }

// console.log(JSON.stringify(comments));

// const posts = [];
// for (let i = 0; i < 100; i++) {
//   const post = {};
//   post.id = i + 1;
//   post.title = faker.lorem.sentence();
//   post.body = faker.lorem.sentences(randomIntFromInterval(20, 60));
//   post.userId = randomIntFromInterval(1, 21);
//   var date = new Date();
//   date.setDate(date.getDate() - Math.random(Math.random()) * +100);
//   post.createdAt = date.toISOString();
//   post.updatedAt = new Date().toISOString();
//   //   post.body = faker.post.body;
//   posts.push(post);
// }

// console.log(JSON.stringify(posts));

// console.log(randomName, randomEmail);
