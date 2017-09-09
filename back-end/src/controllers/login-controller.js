'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.get = (req, res) => {
  if(req.session.user){
    res.status(200).send(req.session.user);
  }
  else{
    res.status(403).send({
      message: "Acesso Negado"
    })
  }
}

exports.post = (req, res) => {
  let auth = false;

  User.findOne({ email: req.body.email })
    .then(user => {
      if(user.password == req.body.password){
        req.session.regenerate(function(){
          req.session.user = {
            name: user.name,
            email: user.email
          }

          // Console message
          console.log(req.connection.remoteAddress + " has connected as " + user.name);

          res.status(200).send({
            auth: true,
            error: null,
            message: "Login realizado com sucesso!",
            user: user.name,
            email: user.email
          });
        });
      }
      else{
        res.status(403).send({
          auth: false,
          error: 'pass',
          message: "Senha incorreta"
        });
      }
    })
    .catch(err => {
      res.status(403).send({
        auth: false,
        error: 'email',
        message: "Email não cadastrado"
      });
    });
}
