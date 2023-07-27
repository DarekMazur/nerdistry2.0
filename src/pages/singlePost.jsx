import * as React from 'react';
import Layout from '../components/templates/Layout/Layout';
import AppProviders from '../providers/AppProviders';

const test = 'Dolor';

const SinglePost = () => (
	<AppProviders>
		<Layout>Lorem ipsum</Layout>
	</AppProviders>
);

export default SinglePost;

export function Head() {
	return <title>{test}</title>;
}
