var connection = require('../../db/index.js');

module.exports = {
  getLoggedInProfile: function(req, res, next) {
    connection.query('SELECT users.username, users.thumbnail, posts.body FROM users INNER JOIN posts on users.id=posts.userId and posts.type="image" and users.id=' + req.body.userId, function(err, result) {
      var response = err || result;
      res.json(response);
    });
  }
};