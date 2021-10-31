const express = require('express');
const app = express()
const mysql = require('mysql');
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'product',
});

app.post('/create', (req, res) => {
    const pid = req.body.pid;
    const name = req.body.name;
    const brand = req.body.brand;
    const salesperson = req.body.salesperson;
    const price = req.body.price;


    db.query('INSERT INTO products (pid,name,brand,salesperson,price) VALUES (?,?,?,?,?)',
        [pid, name, brand,salesperson,price],
        (err, result) => {
            if(err){
                console.log(err);
            } else {
                // alert("values inserted")
               res.send("values inserted") ;
               
            }    
        }
    );
});

app.get('/products', (req, res) => {

    db.query('SELECT * FROM products',
        (err, result) => {
            if(err){
                console.log(err);
            } else {
               res.send(result); 
            }    
        }
    );
});

app.post('/person', (req, res) => {
    const sid = req.body.sid;
    const sname = req.body.sname;
    const section = req.body.section;
    const saleitem = req.body.saleitem;
    const salary = req.body.salary;


    db.query('INSERT INTO persons (sid,sname,section,saleitem,salary) VALUES (?,?,?,?,?)',
        [sid, sname, section,saleitem,salary],
        (err, result) => {
            if(err){
                console.log(err);
            } else {
                // alert("values inserted")
               res.send("values inserted") ;
               
            }    
        }
    );
});

app.get('/persondetails', (req, res) => {

    db.query('SELECT * FROM persons',
        (err, result) => {
            if(err){
                console.log(err);
            } else {
               res.send(result); 
            }    
        }
    );
});

app.listen(3001, () => {
    console.log("your server is running on port 3001");
});
