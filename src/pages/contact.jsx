import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/templates/Layout/Layout';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import AppProviders from '../providers/AppProviders';
import ContactSection from '../components/molecules/ContactSectionWrapper/ContactSection';
import ContactFormWrapper from '../components/molecules/ContactFormWrapper/ContactFormWrapper';

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
				<Wrapper title="Stay in contact!" isWide>
					<ContactSection data={socialData.strapiSocialMenu} />
					<ContactFormWrapper />
				</Wrapper>
			</Layout>
		</AppProviders>
	);
};
export default ContactPage;
