// Question-01: Imagine you are working for a social media company. You have a list of all the users. Your job is to create a function that checks if a specific username is in that list. The function should take the username as input and tell you whether it's present in the list of users or not.

const users = ["John", "David", "Peter", "Alex"];

function isUserPresent(user) {
  if (users.includes(user)) {
    console.log(`Yes, ${user} is a valid user.`);
  } else {
    console.log(`No, ${user} is not a valid user.`);
  }
}

isUserPresent("David");
isUserPresent("Ramesh Babu");

// OP: Yes, David is a valid user.
// OP: No, Ramesh Babu is not a valid user.