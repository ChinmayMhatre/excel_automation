var xlsx = require("xlsx")
var constants = require("./constants");
var nodemailer = require('nodemailer');
var count = 0;
var email = []

var wb = xlsx.readFile("test.xlsx");
var sheet =wb.Sheets["Sheet1"]
var data = xlsx.utils.sheet_to_json(sheet)

data.forEach(function(person){
    if(count==0){
        count=count+1;
    }else{
        email.push(person.Column2)
    }
})
console.log(email);




var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: constants.pass
  }
});

email.forEach(function(one){
    var mailOptions = {
      from: '',
      to: one,
      subject: 'Test email',
      text: `test1 mail sent`
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    
})

