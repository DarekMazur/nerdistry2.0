import * as React from 'react';
import { useTranslation } from 'react-i18next';
import ContactCover from '../../../assets/images/contactCover.jpg';
import ContactForm from '../ContactForm/ContactForm';
import { StyledContactCover } from '../../atoms/ContactCover/ContactCover.styles';
import { StyledContactFormWrapper } from './ContactFormWrapper.styles';

const ContactFormWrapper = () => {
	const { t } = useTranslation();
	return (
		<StyledContactFormWrapper>
			<ContactForm
				primaryText={t('contact.form.send')}
				secondaryText={t('contact.form.sent')}
				loadingText={t('contact.form.sending')}
			/>
			<StyledContactCover $coverImage={ContactCover} />
		</StyledContactFormWrapper>
	);
};

export default ContactFormWrapper;
