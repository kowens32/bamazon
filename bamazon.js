var inquirer = require('inquirer');
var mysql = require('mysql');
var Table = require('cli-table');

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
    display();
});

var display = function(){
    connection.query('SELECT item_id, product_name, price FROM products', function(err,res) {
        if (err) throw err;

        var table = new Table ({
            head: ['ID', 'Product', 'Price'],
            colWidths:[100,200,200]
        });
        for (var i = 0; i < results.length; i++){
            table.push(res[i].item_id);

        }
        console.log('what is this ' +table.toString());
        runSearch();
    });

};



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

}


//
// function readProducts () {
//
// }
//
//
//
//     connection.query('UPDATE products SET stock_quantity = stock_quantity - answer.quant')
//
//
//     function(err) {
//         if (connection.query(
//                 answer.input < 'SELECT stock_quantity FROM products'));
//         console.log('INSUFFICIENT QUANTITY')
//     ) throw (err);
//
//
// })
// )
// })
//
//
