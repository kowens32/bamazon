var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bamazon'
});

 connection.conntect(function(err) {
     if(err) throw err;
     console.log('connected as id ' + connection.threadID);
        //insert functions here
 });

 function idSelection() {
     connection.query('SELECT * FROM  products WHERE id = ?', [user query])
 }

