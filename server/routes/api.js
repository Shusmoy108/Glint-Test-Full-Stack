const express = require('express');
const apiRouter = express.Router();
const fs = require('fs')
const readline = require('readline');
const User = require('../models/User');

apiRouter.route('/user')
    .get(function(req, res) {
        User.find(function(err, users) {
            if (err)
                res.send(err);
            res.json(users);
        });
    })
    .post(function(req, res) {
        const user = new User();
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;

        console.log(user);

        User.save(function(err, doc) {
            if (err)
                res.send(err);
            res.json(doc);
        });
    });


    apiRouter.route('/readdata')
    .get(function(req, res) {
        var timings = [];
        var lineReader = require('readline').createInterface({
            input: require('fs').createReadStream('G:/Glint-Test-Fullstack/server/routes/data.txt')
          });
          
          lineReader.on('line', function (line) {
            var da = line.split(","); 
            timings.push(da[1].split("/"));
            
            //console.log('Line from file:', da[1].split("/").length);
          });
          console.log(timings.length);
          console.log("madarcod");
        try {
            //const data = fs.readFileSync('G:/Glint-Test-Fullstack/server/routes/data.txt', 'utf8')
           /// console.log(data)
          } catch (err) {
            console.error(err)
          }
    })
    .post(function(req, res) {
        const user = new User();
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;

        console.log(user);

        User.save(function(err, doc) {
            if (err)
                res.send(err);
            res.json(doc);
        });
    });
module.exports = apiRouter;
