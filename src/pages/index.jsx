import * as React from 'react';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import Layout from '../components/templates/Layout/Layout';
import AppProviders from '../providers/AppProviders';
import FeaturedPosts from '../components/molecules/FeaturedPosts/FeaturedPosts';
import { getFeaturedPosts } from '../utils/helpers/getFeaturedPosts';
import { posts } from '../utils/mock';
import RecentProjects from '../components/molecules/RecentProjects/RecentProjects';
import MainBlog from '../components/molecules/MainBlog/MainBlog';
import MainAbout from '../components/molecules/MainAbout/MainAbout';

const test = 'Lorem Ipsum';

const IndexPage = () => {
	const sortedPosts = posts.sort((a, b) => {
		const dateA = new Date(a.attributes.publishedAt);
		const dateB = new Date(b.attributes.publishedAt);
		return dateB - dateA;
	});

	return (
		<AppProviders>
			<Layout>
				{getFeaturedPosts(posts).length ? (
					<Wrapper title="Nice to read" isWide>
						<FeaturedPosts posts={getFeaturedPosts(posts)} />
					</Wrapper>
				) : null}
				<Wrapper title="Recent projects">
					<RecentProjects />
				</Wrapper>
				<Wrapper title="Latest on blog">
					<MainBlog posts={sortedPosts.slice(0, 4)} />
				</Wrapper>
				<Wrapper title="About">
					<MainAbout />
				</Wrapper>
			</Layout>
		</AppProviders>
	);
};

export default IndexPage;

export function Head() {
	return <title>{test}</title>;
}
