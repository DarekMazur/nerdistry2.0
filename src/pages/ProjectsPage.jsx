import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/templates/Layout/Layout';
import AppProviders from '../providers/AppProviders';

const ProjectsPage = () => (
	<AppProviders>
		<Helmet>
			<title>Projects | Nerdistry</title>
			<meta name="description" content="lorem ipsum" />
		</Helmet>
		<Layout title="BLog" subtitle="Lorem ipsum">
			Lorem ipsum
		</Layout>
	</AppProviders>
);

export default ProjectsPage;
