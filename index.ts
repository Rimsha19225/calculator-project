#! /usr/bin/env node

import inquirer from "inquirer";

const solution = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  { message: "enter second number", type: "number", name: "secondNumber" },
  {
    message: "select operator to perform operations",
    type: "list",
    name: "operator",
    choices: ["addition","subtraction","multiplication","division","exponention","module"],
  },
]);
if(solution.operator==="addition"){
    console.log(solution.firstNumber + solution.secondNumber);
}else if(solution.operator==="subtraction"){
    console.log(solution.firstNumber - solution.secondNumber);
}else if(solution.operator==="multiplication"){
    console.log(solution.firstNumber * solution.secondNumber);
}else if(solution.operator==="division"){
    console.log(solution.firstNumber / solution.secondNumber);
}else if(solution.operator==="exponention"){
    console.log(solution.firstNumber ** solution.secondNumber)
}else if(solution.operator==="module"){
    console.log(solution.firstNumber %solution.secondNumber)
} else{
    console.log("enter valid operator")
};