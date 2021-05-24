const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const student_info = require('./model/student_info');

mongoose.connect('mongodb+srv://rohit_patil:Jm3i0ZhKXnZlDWEd@cluster0.ae10b.mongodb.net/students?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/insert', function (req, res) {
    var data = new student_info({
        _id: new mongoose.Types.ObjectId(), 
        s_id: req.body.s_id,
        s_firstname: req.body.s_firstname,
        s_lastname: req.body.s_lastname,
        s_branch: req.body.s_branch,
        s_city: req.body.s_city,
        s_Aggregate: req.body.s_Aggregate
    });
    data.save().then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
});

app.get('/show', function (req, res) {
    student_info.find().then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
});

app.delete('/delete/:s_id', function (req, res) {
    student_info.deleteOne({ s_id: req.params.s_id }).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
});

app.put('/update/:s_id', function (req, res) {
    student_info.updateOne(
        { s_id: req.params.s_id },
        {
            $set: {
                s_firstname: req.body.s_firstname,
                s_lastname: req.body.s_lastname,
                s_branch: req.body.s_branch,
                s_city: req.body.s_city,
                s_Aggregate: req.body.s_Aggregate
            }
        }
    ).then((result) => {
        res.json(result);
    }).catch((err) => {
        res.json(err);
    });
});

app.listen(4000);


