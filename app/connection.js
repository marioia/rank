var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'nose1234',
  database : 'rank',
   multipleStatements: true
});

connection.connect(function(err){
	if(!err) {
	    console.log("Database is connected ... nn"  );    
	} else {
		 if (err) throw err;
	    console.log("Error connecting database ... nn"+ err);    
	}
});


module.exports = connection;