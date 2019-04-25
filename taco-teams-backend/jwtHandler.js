var jwt = require('jsonwebtoken');
var secret = 'SecretKEYZ';

module.exports = {
    verifyToken: function(req, res, next) {
        var token = req.headers['x-access-token'];
        if (!token)
            return res.status(403).send({ auth: false, message: 'No token provided.' });
    
        jwt.verify(token, secret, function (err, decoded) {
            if (err) {
                console.log("[verifyToken::verify] failed to authenticate token");
                return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            }
    
            req.userId = decoded.id;
            return next();
        });
    },

    signMemberToken: function(member) {
        return jwt.sign({ id: member._id, isAdmin: member.isAdmin }, secret, {
            expiresIn: 86400 // expires in 24 hours
        });
    } 
}