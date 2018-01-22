var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


router.get('/', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact' });
});

//send email
router.post('/send', function(req, res, next){
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'mrugeshjparmar@gmail.com',
            pass: '0010031990'
        }
    });

    var mailOptions = {
        from: '"Mrugesh Parmar" <mrugeshjparmar@gmail.com>',
        to: 'mrugesh.par@gmail.com',
        subject: 'Hello from the PCRepair',
        text: 'You have submission from.. Name: '+req.body.name+' Email: '+req.body.email+' Message: '+req.body.message+'',
        html: '<p>You have submission from..</p> <ul<li>Name: '+req.body.name+'</li> <li>Email: '+req.body.email+'</li> <li>Message: '+req.body.message+'</li>',
    }
    
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        else{
        console.log('message sent: '+info.response);
        res.redirect('/');     
        }
    });
});

module.exports = router;