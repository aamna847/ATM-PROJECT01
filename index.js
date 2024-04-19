#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000;
let myPin = 2004;
console.log(chalk.red("\n\tWelcome to ATM -Machine\n"));
let PinAnswer = await inquirer.prompt({
    name: "pin",
    message: chalk.yellow("Enter your pin code:"),
    type: "number",
});
if (PinAnswer.pin === myPin) {
    console.log(chalk.blue("Your Pin is Correct"));
    let operationAnswer = await inquirer.prompt([
        {
            name: "operations",
            message: "please select options",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        },
    ]);
    //if user select withdraw
    if (operationAnswer.operations === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            let balance = myBalance - amountAns.amount;
            console.log(`The remaining balance is${balance}`);
        }
        else {
            console.log(chalk.green(`you have insufficient balance`));
        }
    }
    //if user select fast cash
    else if (operationAnswer.operations === "fast cash") {
        let fastcashAnswer = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                choices: ["1000", "3000", "5000", "10000", "15000"],
            },
        ]);
        if (fastcashAnswer.amount <= myBalance) {
            let balance2 = myBalance - fastcashAnswer.amount;
            console.log(`The remaining balance is${balance2}`);
        }
        else {
            console.log(chalk.green("You have insufficient amount"));
        }
        //if user select check myBalance
    }
    else if (operationAnswer.operations === "check balance") {
        console.log(myBalance);
    }
}
// if user select correct pin then upward code works,
//if user select wrong pin.
else {
    console.log(chalk.red("Your Pin is Incorrect"));
}
