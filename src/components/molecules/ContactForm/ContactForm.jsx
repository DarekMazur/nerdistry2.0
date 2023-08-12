import React, { useState } from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StyledContactForm } from './ContactForm.styles';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

const ContactForm = ({ primaryText, secondaryText, loadingText }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const { t } = useTranslation();

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

	const validationSchema = Yup.object().shape({
		name: Yup.string()
			.required(i18next.t('contact.form.validation.nameRequired'))
			.min(2, i18next.t('contact.form.validation.nameShot'))
			.max(30, i18next.t('contact.form.validation.nameLong')),
		email: Yup.string()
			.required(i18next.t('contact.form.validation.emailRequired'))
			.email(i18next.t('contact.form.validation.emailFormat')),
		message: Yup.string().required(
			i18next.t('contact.form.validation.messageRequired')
		),
		acceptTerms: Yup.bool().oneOf(
			[true],
			i18next.t('contact.form.validation.privacyAcceptance')
		),
	});

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
							label={t('contact.form.name')}
							onChange={handleChange}
							value={values.name}
							errorMessage={errorMessage(errors.name)}
							isRequired
						/>
						<Input
							type="email"
							name="email"
							id="email"
							label={t('contact.form.email')}
							onChange={handleChange}
							value={values.email}
							errorMessage={errorMessage(errors.email)}
							isRequired
						/>
						<Input
							tag="textarea"
							name="message"
							id="message"
							label={t('contact.form.message')}
							onChange={handleChange}
							value={values.message}
							errorMessage={errorMessage(errors.message)}
							isRequired
						/>
						<Input
							type="checkbox"
							name="acceptTerms"
							id="acceptTerms"
							label={privacyLink(
								t('contact.form.privacy'),
								t('contact.form.accept')
							)}
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
