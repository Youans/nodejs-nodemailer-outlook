# Project Title

Simple integration between node js and outlook.office365 emailing servers

## Getting Started
Install module using following command :
```
npm install nodejs-nodemailer-outlook
```
In your file.js run the following

```javascript
var nodeoutlook = require('nodejs-nodemailer-outlook')
nodeoutlook.sendEmail({
    auth: {
        user: "johnexample@organization.com",
        pass: "johnpassword"
    }, from: 'info@myorganization.com',
    to: 'jackexample@organization.com',
    subject: 'Hey you, awesome!',
    html: '<b>This is bold text</b>',
    text: 'This is text version!'
});
```

## Built With

* [Nodemailer](https://nodemailer.com) - module for Node.js applications to allow easy as cake email sending. The project got started back in 2010 when there was no sane option to send email messages, today it is the solution most Node.js users turn to by default.

## Versioning

Current version : 1.0.2

## Authors

* **Youans Ezzat**

## License

This project is opensource.
