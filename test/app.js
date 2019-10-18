var nodeoutlook = require('.././nodejs-nodemailer-outlook.js')
nodeoutlook.sendEmail({
    auth: {
        user: "sender@outlook.com",
        pass: "********"
    },
    from: 'sender@outlook.com',
    to: 'receiver@gmail.com',
    subject: 'Hey you, awesome!',
    html: '<b>This is bold text</b>',
    text: 'This is text version!',
    onError: e => console.log(e),   
    onSuccess: i => console.log(i)
});
