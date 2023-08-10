import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Layout from '../components/templates/Layout/Layout';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import AppProviders from '../providers/AppProviders';
import PrivacyContent from '../components/molecules/PrivacyContent/PrivacyContent';

const PrivacyPage = () => {
	const { t } = useTranslation();
	return (
		<AppProviders>
			<Helmet>
				<title>{t('privacy.title')} | Nerdistry</title>
				<meta name="description" content="lorem ipsum" />
			</Helmet>
			<Layout title={t('privacy.title')} isSubtitleHidden>
				<Wrapper title={t('privacy.pageTitle')}>
					<PrivacyContent />
				</Wrapper>
			</Layout>
		</AppProviders>
	);
};

export default PrivacyPage;
