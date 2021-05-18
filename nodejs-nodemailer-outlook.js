let nodemailer = require("nodemailer");

module.exports.sendEmail = function (options) {
  const invok = function(f,x) {
    f(x);
  };
  return new Promise((resolve, reject) => {
    if (!options) {
      reject("Options can not be null");
    } else if (!options.auth) {
      reject("Options.auth{user,pass} can not be null");
    } else if (!options.auth.user || !options.auth.pass) {
      reject("Options.auth.user or Options.auth.password can not be null");
    }
    var transporter = nodemailer.createTransport({
      host: options.host || "smtp.office365.com", // Office 365 server
      port: options.port || 587, // secure SMTP
      secure: options.secure || false, // false for TLS - as a boolean not string - but the default is false so just remove this completely
      auth: options.auth,
      tls: options.tls || { ciphers: "SSLv3" },
    });
    transporter.sendMail(
      {
        from: options.from,
        replyTo: options.replyTo,
        to: options.to,
        subject: options.subject,
        cc: options.cc,
        bcc: options.bcc,
        text: options.text,
        html: options.html,
        attachments: options.attachments,
      },
      // error, info callback
      (e, i) => { invok(e ? reject : resolve, e ? e : i) }
    );
  });
};
