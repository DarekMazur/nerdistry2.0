import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/templates/Layout/Layout';
import AppProviders from '../providers/AppProviders';

const BlogPage = () => (
	<AppProviders>
		<Helmet>
			<title>Blog | Nerdistry</title>
			<meta name="description" content="" />
		</Helmet>
		<Layout title="Blog" subtitle="">
			Lorem ipsum
		</Layout>
	</AppProviders>
);

export default BlogPage;
