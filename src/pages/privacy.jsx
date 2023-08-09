import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/templates/Layout/Layout';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import AppProviders from '../providers/AppProviders';
import PrivacyContent from '../components/molecules/PrivacyContent/PrivacyContent';

const PrivacyPage = () => (
	<AppProviders>
		<Helmet>
			<title>Contact | Nerdistry</title>
			<meta name="description" content="lorem ipsum" />
		</Helmet>
		<Layout title="Privacy" isSubtitleHidden>
			<Wrapper title="Privacy policy">
				<PrivacyContent />
			</Wrapper>
		</Layout>
	</AppProviders>
);
export default PrivacyPage;
