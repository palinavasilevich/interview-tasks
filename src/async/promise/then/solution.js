// function getNumber() {
//   return Promise.resolve(5);
// }

// function double(number) {
//   return Promise.resolve(number * 2);
// }

// function triple(number) {
//   return Promise.resolve(number * 3);
// }

// getNumber().then(double).then(triple).then(console.log);

function getNumber() {
  return Promise.resolve(5);
}

function double(number) {
  return number * 2;
}

function triple(number) {
  return number * 3;
}

// getNumber().then(double).then(triple).then(console.log);

//Task 6 — Returning a Promise from .then()

// function getUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: 1, name: "Alice" });
//     }, 1000);
//   });
// }

// function getPosts(userId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, userId, title: "Post 1" },
//         { id: 2, userId, title: "Post 2" },
//       ]);
//     }, 1000);
//   });
// }

// function getComments(postId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, postId, text: "Great post!" },
//         { id: 2, postId, text: "Thanks!" },
//       ]);
//     }, 1000);
//   });
// }

// getUser()
//   .then((user) => getPosts(user.id))
//   .then((posts) => getComments(posts[0].id))
//   .then(console.log);

// Task 7 — Error handling in a Promise chain

// function getUser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (id === 1) {
//         resolve({ id: 1, name: "Alice" });
//       } else {
//         reject(new Error("User not found"));
//       }
//     }, 500);
//   });
// }

// function printUser(id) {
//   return getUser(id)
//     .then((user) => user.name)
//     .then((username) => console.log(`Hello, ${username}`))
//     .catch((error) => console.log(`Error: ${error.message}`));
// }

// printUser(1);
// printUser(2);

// Task 8 — Error inside .then()
function getUser() {
  return Promise.resolve({
    id: 1,
    name: "Alice",
    age: 17,
  });
}

getUser()
  .then((user) => {
    if (user.age >= 18) {
      return user.name;
    }

    throw new Error("User is too young");
  })
  .then((username) => console.log(`Welcome, ${username}`))
  .catch((error) => console.log(`Error: ${error.message}`));
