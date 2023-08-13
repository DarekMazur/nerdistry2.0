import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';
import Layout from '../components/templates/Layout/Layout';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import AppProviders from '../providers/AppProviders';
import PrivacyContent from '../components/molecules/PrivacyContent/PrivacyContent';

const PrivacyPage = () => {
	const { t } = useTranslation();
	const { i18n } = useI18next();
	return (
		<AppProviders>
			<Helmet>
				<title>{t('privacy.title')} | Nerdistry</title>
				<meta name="description" content="lorem ipsum" />
			</Helmet>
			<Layout title={t('privacy.title')} isSubtitleHidden>
				{i18n.resolvedLanguage === 'ru' ? (
					<Wrapper title={t('main.feturedTitle')} isWide isBig />
				) : (
					<Wrapper title={t('privacy.pageTitle')}>
						<PrivacyContent />
					</Wrapper>
				)}
			</Layout>
		</AppProviders>
	);
};

export default PrivacyPage;

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
