var nodeoutlook = require('.././outlook')
nodeoutlook.sendEmail({
    auth: {
        user: "youans.ezzat@mondiamedia.com",
        pass: "xxxxx"
    }, from: 'youans.ezzat@mondiamedia.com',
    to: 'youans.ezzat@gmail.com',
    subject: 'Hey you, awesome!',
    'h:Reply-To': 'reply2this@company.com',
    html: '<b>Wow Big powerful letters</b>',
    text: 'Mailgun rocks, pow pow!'
});
