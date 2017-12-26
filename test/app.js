var nodeoutlook = require('.././outlook')
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
