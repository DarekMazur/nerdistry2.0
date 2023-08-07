import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/templates/Layout/Layout';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import AppProviders from '../providers/AppProviders';
import ContactForm from '../components/molecules/ContactForm/ContactForm';
import ContactSection from '../components/molecules/ContactSectionWrapper/ContactSection';

const ContactPage = () => {
	const socialData = useStaticQuery(graphql`
		query {
			strapiSocialMenu {
				url {
					id
					platformName
					socialLink
				}
			}
		}
	`);

	return (
		<AppProviders>
			<Helmet>
				<title>Contact | Nerdistry</title>
				<meta name="description" content="lorem ipsum" />
			</Helmet>
			<Layout title="Contact" isSubtitleHidden>
				<Wrapper title="Stay in contact!">
					<ContactSection data={socialData.strapiSocialMenu} />
					<ContactForm
						primaryText="Send"
						secondaryText="Sent!"
						loadingText="Sending..."
					/>
				</Wrapper>
			</Layout>
		</AppProviders>
	);
};
export default ContactPage;
