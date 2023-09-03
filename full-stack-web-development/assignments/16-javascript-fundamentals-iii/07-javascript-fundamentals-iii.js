// Question-07: Build a program that utilizes a Map to store user information (name, age, email) and allows adding, updating, and deleting user records.

const recordsMap = new Map();

function addUser(name, age, email) {
  const userInfo = { age, email };
  recordsMap.set(name, userInfo);
}

function updateUser(name, age, email) {
  if (recordsMap.has(name)) {
    const userInfo = recordsMap.get(name);
    userInfo.age = age;
    userInfo.email = email;
  }
}

function deleteUser(name) {
  recordsMap.delete(name);
}

addUser("Daniel", 30, "daniel@gmail.com");
addUser("Racquel", 25, "racquel@gmail.com");
addUser("Martin", 20, "martin@gmail.com");
console.log(recordsMap);

updateUser("Racquel", 29, "racquel_UPDATED@gmail.com");
console.log(recordsMap);

deleteUser("Martin");
console.log(recordsMap);