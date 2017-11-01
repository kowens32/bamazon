
var mysql = require('mysql');
var inquirer = require('inquirer');

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
    buyProduct();


});


// var display = function(){
//     connection.query('SELECT item_id, product_name, price FROM products', function(err,res) {
//         if (err) throw err;
//         for (var i = 0; i < res.length; i ++){
//             console.log("ID: " + res[i].item_id + " | " + "NAME: " + res[i].product_name + " | " + "PRICE: " + res[i].price);
//         }
//         console.log('-------------------------------------');
//     });
//
// }

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


var buyProduct = function(){
    connection.query('SELECT * FROM products', function(err,results) {
        if (err) throw err;
        for (var i = 0; i < results.length; i ++){
            console.log("ID: " + results[i].item_id + " | " + "NAME: " + results[i].product_name + " | " + "PRICE: " + results[i].price);
            console.log('-------------------------------------');
        }


    inquirer
        .prompt([{
            name: 'productId',
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
            var cQuant;
            var cProduct;
            var cPrice;
            for (var i = 0; i < results.length; i ++){
                console.log('mm', results.length);
                if (results[i].item_id === parseInt(answer.productId)) {
                    cQuant = results[i].stock_quantity;
                    cProduct = results[i].product_name;
                    cPrice = results[i].price
                }
            }

        if (cQuant >= parseInt(answer.quant) && (cQuant > 0) && (answer.quant > 0)){
                connection.query('UPDATE products SET ? WHERE ?' [{
                    stock_quanity: (cQuant - answer.quant),

                }, {
                    item_id: answer.productId
                }],
                    function(err) {
                    if (err) throw err;
                    console.log('INVOICE OF ' + answer.quant + '' + cProduct);
                    console.log('TOTAL COST ' + '$' + (answer.quant * cPrice));
                    });

                console.log('nn', cPrice);
        }
        else {
            console.log('INSUFFICIENT QUANTITY!');
        }

        });


});
};