// import express from 'express';
// const app = express();
// app.get('/', (req: any, res: any) => {
//     res.send('Hello World!');
// });
// const PORT = 3000;

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


import express, {Request,Response} from 'express';
const app = express();
const PORT = 3000

app.get('/',(req:Request,res:Response)=>{
  res.send("this is simple API");
})

app.listen(PORT,()=>{
  console.log("server is running")
})