const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sgt'
});

connection.connect((err) => {
    if (err) {
        console.log('There was an error: ', err)
    }else{
        console.log('Connected to database');
    }
});

//RETRIEVE STUDENT DATA
app.get('/students', (req, res, next) => {
    let query = 'SELECT * FROM ??';
    let inserts = ['student_data'];
    let sql = mysql.format(query, inserts);

    connection.query(sql, (err, results, fields) => {
        if(err) return next(err);

        const output = {
            success: true,
            data: results
        }
        res.json(output);
    })
})

//INSERT STUDENT TO TABLE
app.post('/students/addstudent', (req, res, next) => {
    const { name, grade, course_name } = req.body;

    let query = 'INSERT INTO ?? (??, ??, ??) VALUES (?, ?, ?)';
    let inserts = ['student_data', 'name', 'grade', 'course_name', name, grade, course_name];

    let sql = mysql.format(query, inserts);
    console.log("This is the formatted SQL", sql);
    connection.query(sql, (err, results, fields) => {
        if (err) return next(err);
        const output = {
            success : true,
            data: results
        }
        res.json(output);
    })
})


app.listen(PORT, () => {
    console.log("Server started on PORT: ", PORT);
});