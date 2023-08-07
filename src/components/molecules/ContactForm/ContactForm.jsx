import React, { useState } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { StyledContactForm } from './ContactForm.styles';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

const validationSchema = Yup.object().shape({
	name: Yup.string()
		.required('name is required')
		.min(2, 'name is to short, it should be at least 2 chars long')
		.max(30, 'name is to long, it should be not longer than 30 characters'),
	email: Yup.string()
		.required('email is required')
		.email('incorrect email format'),
	message: Yup.string().required(`message can't be empty`),
	acceptTerms: Yup.bool().oneOf([true], 'accept privacy police'),
});

const ContactForm = ({ primaryText, secondaryText, loadingText }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const errorMessage = (message) => {
		const error = message ? <div>{message}</div> : null;
		return error;
	};

	const privacyLink = (linked, prefix, sufix) => (
		<>
			{prefix ? `${prefix} ` : 'null'}
			<a href="/privacy" target="_blank">
				{linked}
			</a>
			{sufix ? ` ${sufix}` : ''}
		</>
	);

	return (
		<StyledContactForm>
			<Formik
				initialValues={{
					name: '',
					email: '',
					message: '',
					acceptTerms: false,
				}}
				validationSchema={validationSchema}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setIsLoading(true);
					axios
						.post('/api/sendMail', values)
						// eslint-disable-next-line no-unused-vars
						.then((res) => {
							setIsSuccess(true);
							setIsLoading(false);
							setSubmitting(false);
							resetForm();
							document.querySelector('#acceptTerms').checked = false;
						})
						.then(
							setTimeout(() => {
								setIsSuccess(false);
							}, 3000)
						)
						.catch((error) => {
							// eslint-disable-next-line no-console
							console.error(`Sending error: ${error}`);
						});
				}}
			>
				{({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
					<form onSubmit={handleSubmit}>
						<Input
							name="name"
							id="name"
							label="Name"
							onChange={handleChange}
							value={values.name}
							errorMessage={errorMessage(errors.name)}
							isRequired
						/>
						<Input
							type="email"
							name="email"
							id="email"
							label="E-mail"
							onChange={handleChange}
							value={values.email}
							errorMessage={errorMessage(errors.email)}
							isRequired
						/>
						<Input
							tag="textarea"
							name="message"
							id="message"
							label="Message"
							onChange={handleChange}
							value={values.message}
							errorMessage={errorMessage(errors.message)}
							isRequired
						/>
						<Input
							type="checkbox"
							name="acceptTerms"
							id="acceptTerms"
							label={privacyLink('privacy policy', 'Accept')}
							onChange={handleChange}
							value={values.acceptTerms}
							errorMessage={errorMessage(errors.acceptTerms)}
							isRequired
						/>

						<Button
							primaryText={primaryText}
							secondaryText={secondaryText}
							loadingText={loadingText}
							type="submit"
							disabled={isSubmitting}
							isLoading={isLoading}
							isSuccess={isSuccess}
						/>
					</form>
				)}
			</Formik>
		</StyledContactForm>
	);
};

export default ContactForm;

ContactForm.defaultProps = {
	loadingText: null,
};

ContactForm.propTypes = {
	primaryText: PropTypes.string.isRequired,
	secondaryText: PropTypes.string.isRequired,
	loadingText: PropTypes.string,
};
