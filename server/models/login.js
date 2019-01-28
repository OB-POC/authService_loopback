'use strict';
const jwt = require('jsonwebtoken');
const secret = "TOPSECRET";

module.exports = function (Login) {
  Login.login = (username, password, cb) => {
    if (username && password) {
      Login.app.dataSources.authData.getData((err, response, context) => {
        if (err) {
          cb(null, 500, "Forbidden access");
        }
        const users = response;
        if (users instanceof Array) {
          let userData = users.filter(user => user.username == username && user.password == password);
          if (userData.length > 0) {
            let token = jwt.sign({
              username: username
            }, secret, {
              expiresIn: 86400
            });
            cb(null, 200, token, );
          } else {
            let err = Error();
            err.message = 'Unauthorized: Username or Password is incorrect';
            err.statusCode =401;
            cb(err,null);
          }
        }
      });
    }
    else{
        let err = Error();
            err.message = 'Unauthorized: Username or Password is incorrect';
            err.statusCode =400;
            cb(err,null);
    }
  }
  Login.remoteMethod(
    'login', {
      http: {
        path: '/login/:username',
        verb: 'post'
      },
      accepts: [{
          arg: 'username',
          type: 'string'
        },
        {
          arg: 'password',
          type: 'string'
        },
      ],
      returns: [{
          arg: 'status',
          type: 'number'
        },
        {
          arg: 'message',
          type: 'string'
        }
      ]
    }
  );
};
