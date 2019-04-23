var express = require('express');
var mongoose = require('mongoose');
var schemas = require('./schemas');

var cors = require('cors');
var app = express();
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/tacodb', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB!');
});

// GET all companies, with teams populated
app.get('/companies', function (req, res) {
    schemas.CompanyModel
    .find()
    .populate('teams')
    .exec((err, companies) => {
        if (err) {
            return res.status(500).json({ message: 'Something went wrong', error: err });
        }
        return res.status(200).json(companies);
    });
})

// GET all teams for specific company
app.get('/company/:companyId', function (req, res) {
    schemas.CompanyModel
    .findById(req.params.companyId)
    .populate({ path: 'teams', populate: { path: 'teamMembers' } })
    .exec((err, company) => {
        if (err) {
            return res.status(500).json({ message: 'Something went wrong', error: err });
        }
        return res.status(200).json(company);
    });
})

app.listen(3000);