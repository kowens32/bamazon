var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bamazon'
});


connection.connect(function(err) {
    if(err) throw err;
    console.log("connected as id " + connection.threadId);
    //insert functions here
    runSearch();
});

function runSearch() {
    inquirer
        .prompt([{
            name: 'item-id',
            type: 'input',
            message: 'What is your product id?'
        },
            {
            name: 'quant',
            type: 'input',
            message: 'How much would you like to buy'
        }

])
        .then(function(answer){
        })
};



