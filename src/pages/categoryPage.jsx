import { Helmet } from 'react-helmet';
import * as React from 'react';
import AppProviders from '../providers/AppProviders';
import Layout from '../components/templates/Layout/Layout';

// eslint-disable-next-line react/prop-types
const CategoryPage = ({ pageContext }) => {
	console.log(pageContext);

	return (
		<AppProviders>
			<Helmet>
				<title>Category | Nerdistry</title>
				<meta name="description" content="Lorem ipsum" />
			</Helmet>
			<Layout title="Blog" subtitle="category">
				lorem
			</Layout>
		</AppProviders>
	);
};

export default CategoryPage;
