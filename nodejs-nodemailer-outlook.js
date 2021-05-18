var nodemailer = require('nodemailer');

module.exports.sendEmail = function (options) {
    if(!options){
        throw new Error("Options can not be null");
    } else if(!options.auth) {
        throw new Error("Options.auth{user,pass} can not be null");
    } else if(!options.auth.user || !options.auth.pass) {
        throw new Error("Options.auth.user or Options.auth.password can not be null");

    }
    var transporter = nodemailer.createTransport({
        host: options.host || 'smtp.office365.com', // Office 365 server
        port: options.port || 587,     // secure SMTP
        secure:options.secure || false, // false for TLS - as a boolean not string - but the default is false so just remove this completely
        auth: options.auth,
        tls: options.tls || {ciphers: 'SSLv3'}
    });
    transporter.sendMail({
        from: options.from,
        sender: options.sender,
        replyTo: options.replyTo,
        to: options.to,
        subject: options.subject,
        cc:options.cc,
        bcc:options.bcc,
        text:options.text,
        html:options.html,
        attachments:options.attachments,
    }, function (err, info) {
        if (err && options.onError) {
            options.onError(err);
        }
        else if(options.onSuccess) {
            options.onSuccess(info);
        }
    });
}

