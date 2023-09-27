//example 1
const PI = 3.14159;
console.log("The value of PI is: " +PI );

//example 2
const GREETING = "Hello, World!";
console.log(GREETING);

//example 3
const DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Days of the week: " + DAYS_OF_WEEK.join(", "));

//example 4
const CONFIG = {
    maxUsers: 100,
    serverAddress: "https://badmintonsportslover.blogspot.com/"
  };
  
  console.log("Max users: " + CONFIG.maxUsers);
  console.log("Server address: " + CONFIG.serverAddress);

//example 5
const add = function (a, b) {
    return a + b;
  };
console.log("Adding 2 and 3: " + add(2, 3));
  