"use strict";
// import express from 'express';
// const app = express();
// app.get('/', (req: any, res: any) => {
//     res.send('Hello World!');
// });
// const PORT = 3000;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
// type User = {
//     name: string;
//     age: number;
//   };
//   function isAdult(user: User): boolean {
//     return user.age >= 18;
//     console.log('hello')
//   }
//   const justine: User = {
//     name: 'Justine',
//     age: 23,
//   };
//   const isJustineAnAdult: boolean = isAdult(justine);
// function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
//   }
//   greet("Maddison", new Date());
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/', (req, res) => {
    res.send("this is simple API");
});
app.listen(PORT, () => {
    console.log("server is running");
});
