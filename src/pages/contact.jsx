import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import PropTypes, { oneOfType } from 'prop-types';
import Layout from '../components/templates/Layout/Layout';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import AppProviders from '../providers/AppProviders';
import ContactSection from '../components/molecules/ContactSectionWrapper/ContactSection';
import ContactFormWrapper from '../components/molecules/ContactFormWrapper/ContactFormWrapper';
import { useSocialData } from '../hooks/useSocialData';

const ContactPage = () => {
	const { t } = useTranslation();
	const { i18n } = useI18next();

	const { strapiSocialMenu } = useSocialData();

	return (
		<AppProviders>
			<Helmet>
				<title>{t('contact.title')} | Nerdistry</title>
				<meta name="description" content={t('contact.metaDescription')} />
			</Helmet>
			<Layout title={t('contact.title')} isSubtitleHidden>
				{i18n.resolvedLanguage === 'ru' ? (
					<Wrapper title={t('main.feturedTitle')} isWide isBig />
				) : (
					<Wrapper title={t('contact.subTitle')} isWide>
						<ContactSection data={strapiSocialMenu} />
						<ContactFormWrapper />
					</Wrapper>
				)}
			</Layout>
		</AppProviders>
	);
};
export default ContactPage;

ContactPage.propTypes = {
	pageContext: PropTypes.shape({
		contact: PropTypes.objectOf(oneOfType([PropTypes.array])),
	}).isRequired,
};

export const query = graphql`
	query ($language: String!) {
		locales: allLocale(filter: { language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`;
