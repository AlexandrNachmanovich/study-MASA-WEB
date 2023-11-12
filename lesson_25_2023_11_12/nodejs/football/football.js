const express = require('express');
const mysql = require('mysql2');
require('ejs');

const port = 3200;

// creating Express server
const app = express();

/********************************************
 * CREATE DB OBJECT AND CONNECT TO DB
 ********************************************/

const db = mysql.createConnection({
    host: "localhost", // or '127.0.0.1'
    port: "3306", // this is a default, so it is not needed
    database: "football", // the db adress is a combination of host-port-database
    user: "root", // for authentication and authorization (we should quickly change it
                  // to the less powerful user)
    password: ""
})

db.connect((err) => {

    if (err) 
       throw err;
    // Connection to DB is critical for this server, so if 
    // it is failed, we should not start the server,
    // we should handle the error 

    console.log("I am lucky today. 😆 I've connected to DB")

})

/********************************************
 * ROUTING
 ********************************************/

app.get('/', (req, res) => {
    
    res.send(`<h1>🚧 👷‍♀️ Football Manager is Under Construnction 👷‍♂️ 🏗️</h1>`)
    
})


/********************************************
 * LISTENER
 ********************************************/

app.listen(port,(err) => {

    console.log(`I am the FOOTBALL MANAGER SERVER, listening on port ${port}`)

})
