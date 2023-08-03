const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

const transport = nodemailer.createTransport(
	nodemailerSendgrid({
		apiKey: process.env.SENDGRID_API_KEY,
	})
);

export default async (req, res) => {
	const mailMail = {
		from: `Nerdistry - ${req.body.name} <notification@nerdistry.pl>`,
		to: 'kontakt@nerdistry.pl',
		replyTo: `${req.body.name} <${req.body.email}>`,
		subject: `nerdistry.pl - message from ${req.body.name}`,
		text: `${req.body.name} (${req.body.email}) pisze: ${req.body.message}`,
		html: `<h1>Hello world!</h1>
    <h3>You've got message from ${req.body.name} (${req.body.email})</h3>
    <p>${req.body.message}</p>`,
	};

	const confirmMail = {
		from: `Nerdistry <no-replay@nerdistry.pl>`,
		to: `${req.body.name} <${req.body.email}>`,
		subject: `Hey ${req.body.name}, thanks for your message!`,
		text: `Hello ${req.body.name}, your message from nerdistry.pl was sent: "${req.body.message}"`,
		html: `<h1>Hello ${req.body.name}</h1>
    <h3>Thanks for message!</h3>
    <p>For sure, I'll read it and do my best to answer!</p>
    <p>Regards,</p>
    <p>Gacek</p>
    <p>You can check your message bellow:</p>
    <p>"${req.body.message}"</p>`,
	};

	Promise.all([transport.sendMail(mailMail), transport.sendMail(confirmMail)])
		// eslint-disable-next-line no-shadow
		.then(([res]) => {
			console.log(
				'Message delivered with code %s %s',
				res.statusCode,
				res.statusMessage
			);
			return res.end();
		})
		.catch((err) => {
			console.log('Errors occurred, failed to deliver message');

			if (err.response && err.response.body && err.response.body.errors) {
				err.response.body.errors.forEach((error) =>
					console.log('%s: %s', error.field, error.message)
				);
			} else {
				console.log(err);
			}

			return res.end();
		});
};
