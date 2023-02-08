#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        type: "input",
        name: "user_id",
        message: "Enter your USER_ID > "
    },
    {
        type: "number",
        name: "user_pin",
        message: "Enter your USER_PIN > "
    },
    {
        type: "list",
        choices: ["saving", "current"],
        name: "account_type",
        message: "Enter your Account type > "
    },
    {
        type: "list",
        choices: ["Fast cash", 'Withdraw'],
        name: "transcation_type",
        message: "Enter your Transaction type > ",
        when(answer) {
            return answer.account_type;
        }
    },
    {
        type: "list",
        choices: ["1000", '2000', "10000", "20000"],
        name: "amount",
        message: "choose your amount",
        when(answer) {
            return answer.transcation_type == "Fast cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your Amount> ",
        when(answer) {
            return answer.transcation_type == "Withdraw";
        }
    },
]);
console.log(answer);
if (answer.user_id && answer.user_pin) {
    const balance = Math.floor(Math.random() * 1000000);
    console.log(chalk.green("Your total account balance is> " + (chalk.blue(balance))));
    const enter_amount = answer.amount;
    if (balance >= enter_amount) {
        const a = balance - enter_amount;
        console.log(chalk.yellow("Your remaining balance is> " + (chalk.blue(a))));
    }
    else {
        console.log("Insuficient balance");
    }
}
