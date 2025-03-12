'use strict'
const dotenv = require("dotenv")
dotenv.config();
console.log("hello world");
//in here(nodejs) the console is the terminal

// alert is not defined in js
//node REPL
//read , evaluate , print , loop

//process

//in node js we have a process object
//this object gives us information and data about the current node.js process and allows developers to interact with it
// it lets you to make your node js program dynamic (depending on where you want to run it)


//process.argv
console.log(process.env.NODE_ENV);
console.log(process.env.DOMAIN);
//like passing arguments to a program or a terminal

console.log(process.env.DOMAIN)