import * as React from 'react';
import ContactCover from '../../../assets/images/contactCover.jpg';
import ContactForm from '../ContactForm/ContactForm';
import { StyledContactCover } from '../../atoms/ContactCover/ContactCover.styles';
import { StyledContactFormWrapper } from './ContactFormWrapper.styles';

const ContactFormWrapper = () => (
	<StyledContactFormWrapper>
		<ContactForm
			primaryText="Send"
			secondaryText="Sent!"
			loadingText="Sending..."
		/>
		<StyledContactCover $coverImage={ContactCover} />
	</StyledContactFormWrapper>
);

export default ContactFormWrapper;
