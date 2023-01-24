console.log('Hello')

global.luckyNum = '77';

console.log(global.luckyNum) // retrieve stored global value - liek a var or const

console.log(process.platform) // find platform you're on

console.log(process.env.USER) // fetch environment User

// this happens last on exit 
process.on('exit', () => console.log('program exited')) // process calls a call back function when 'exit' happens

const { DiffieHellmanGroup } = require('crypto');
//node index.js

// you can create your owen process calls/emitters
const { EventEmitter } = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('lunch', () => console.log('yum yum')) // event emmiter function

eventEmitter.emit('lunch') // calls function

const { readFile, readFileSync } = require('fs'); // anytime you see a function with sync think 'blocking' = it will need to finish its work before executing

const txt = readFileSync('./hello.txt', 'utf8');// pass file to be read + define its encoding utf8
console.log(txt) // pass it to console

const txt2 = readFile('./hello.txt', 'utf8', (err, txt) => {console.log(txt)});// non blocking version will call-back hass err object if it fails
console.log(txt2) // pass it to console

console.log('do this ASAP') // if we make it readFile it will be non blocking

///// promise based solution

const { readFile } = require ('fs').promises;

async function hello(){ // wrapped in async function 
const file = await readFile('./hello.txt', 'utf8');
console.log(file)
}

hello();

////////////  modules

const myModuls = require('./my-module.js'); // import it as a variable with require 

// npm init -y  // y flag uses default options and this creates a package.json file

// npm install express - this will install express and updates the package.json

// do not touch the node_modules folder

const express = require ('express') // imports the express package 

