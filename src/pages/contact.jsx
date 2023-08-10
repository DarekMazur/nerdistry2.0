import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'react-i18next';
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

	const { t } = useTranslation();

	return (
		<AppProviders>
			<Helmet>
				<title>{t('contact.title')} | Nerdistry</title>
				<meta name="description" content="lorem ipsum" />
			</Helmet>
			<Layout title={t('contact.title')} isSubtitleHidden>
				<Wrapper title={t('contact.subTitle')} isWide>
					<ContactSection data={socialData.strapiSocialMenu} />
					<ContactFormWrapper />
				</Wrapper>
			</Layout>
		</AppProviders>
	);
};
export default ContactPage;
