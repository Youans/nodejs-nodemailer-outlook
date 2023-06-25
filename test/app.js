var nodeoutlook = require('.././nodejs-nodemailer-outlook.js')
nodeoutlook.sendEmail({
    auth: {
        user: "thomas.kostka@tci.gov.fm",
        pass: "Micro@1979"
    },
    from: 'thomas.kostka@tci.gov.fm',
    to: 'thomas.kostka@tci.gov.fm',
    subject: 'Hey you, awesome!',
    html: '<b>did you recieve this?</b>',
    text: 'This is text version!',
    onError: e => console.log(e),   
    onSuccess: i => console.log(i)
});
