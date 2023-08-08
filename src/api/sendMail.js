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
		text: `${req.body.name} (${req.body.email}) wrote: ${req.body.message}`,
		html: `<h1>Hello world!</h1>
    <h3>You've got message from ${req.body.name} (${req.body.email})</h3>
    <p>${req.body.message}</p>`,
	};

	const confirmMail = {
		from: `Nerdistry <no-replay@nerdistry.pl>`,
		to: `${req.body.name} <${req.body.email}>`,
		subject: `Hi ${req.body.name}, thanks for your message!`,
		text: `Hello ${req.body.name}, your message from nerdistry.pl was sent: "${req.body.message}"`,
		html: `<h1>Hello ${req.body.name}</h1>
    <h3>Thanks for your message!</h3>
    <p>I will 100% read it and do my best to respond!</p>
    <p>Regards,</p>
    <p>Gacek</p>
    <p>You can check your message bellow:</p>
    <p>"${req.body.message}"</p>`,
	};

	Promise.all([transport.sendMail(mailMail), transport.sendMail(confirmMail)])
		.then(([transportRes]) => {
			// eslint-disable-next-line no-console
			console.log(
				'Message delivered with code %s %s',
				transportRes.statusCode,
				transportRes.statusMessage
			);
			return transportRes.end();
		})
		.catch((err) => {
			// eslint-disable-next-line no-console
			console.log('Errors occurred, failed to deliver message');

			if (err.response && err.response.body && err.response.body.errors) {
				// eslint-disable-next-line no-console
				err.response.body.errors.forEach((error) =>
					console.log('%s: %s', error.field, error.message)
				);
			} else {
				// eslint-disable-next-line no-console
				console.log(err);
			}

			return res.end();
		});
};
