var mongoose = require('mongoose');

var teamMemberSchema = new mongoose.Schema({
    name: String,
    function: String,
    quote: String
});
var TeamMemberModel = mongoose.model('teamMember', teamMemberSchema, 'members');

var teamSchema = new mongoose.Schema({
    name: String,
    location: String,
    teamMembers: [{ type: 'ObjectId', ref: 'teamMember' }]
});
var TeamModel = mongoose.model('team', teamSchema);

var companySchema = new mongoose.Schema({
    name: String,
    address: String,
    teams: [{ type: 'ObjectId', ref: 'team'}], // Team objects
});
var CompanyModel = mongoose.model('company', companySchema, 'companies');

module.exports = {
    CompanyModel, TeamModel, TeamMemberModel
}