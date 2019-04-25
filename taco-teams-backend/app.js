var express = require('express');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var bodyParser = require('body-parser');
var cors = require('cors');

var jwtHandler = require('./jwtHandler');
var schemas = require('./schemas');

mongoose.connect('mongodb://127.0.0.1:27017/tacodb', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB!');
});

var app = express();
app.use(cors());
app.use(bodyParser.json());

// Let a member login, if the password matches, give the member a token!
app.post('/login', function (req, res) {
    schemas.TeamMemberModel
    .findOne({ email: req.body.username })
    .select('password') 
    .exec((err, member) => {
        if (err || !member) {
            return res.status(500).json({ message: "Error on the server." });
        }

        const passwordIsValid = bcrypt.compareSync(req.body.password, member.password);
        if (!passwordIsValid) {
            return res.status(401).json({ auth: false });
        }

        const token = jwtHandler.signMemberToken(member);
        return res.status(200).json(token);
    });
})

// Every route after this requires authentication
app.all('/*', jwtHandler.verifyToken);

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

// GET single team member
app.get('/member/:memberId', function (req, res) {
    schemas.TeamMemberModel
    .findById(req.params.memberId, (err, member) => {
        if (err) {
            return res.status(500).json({ message: 'Something went wrong', error: err });
        }
        return res.status(200).json(member);
    });
})

app.put('/member/:memberid', function (req, res) {
    schemas.TeamMemberModel
    .findByIdAndUpdate(req.params.memberid, { name: req.body.name } ,(err, member) => {
        if (err || !member) {
            return res.status(500).json({ message: "Error on the server." });
        }

       return res.status(200).json(member);
    });
    schemas.TeamMemberModel.create(req.body);

})

app.listen(3000);