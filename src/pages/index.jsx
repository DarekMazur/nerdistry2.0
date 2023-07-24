import * as React from 'react';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import Layout from '../components/templates/Layout/Layout';
import AppProviders from '../providers/AppProviders';
import FeaturedPosts from '../components/molecules/FeaturedPosts/FeaturedPosts';
import { getFeaturedPosts } from '../utils/helpers/getFeaturedPosts';
import { posts } from '../utils/mock';
import RecentProjects from '../components/molecules/RecentProjects/RecentProjects';
import MainBlog from '../components/molecules/MainBlog/MainBlog';

const test = 'Lorem Ipsum';

const IndexPage = () => (
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
				<MainBlog posts={posts.slice(0, 4)} />
			</Wrapper>
			<Wrapper title="Header 4">
				<p>avatar</p>
				<p>
					Lorem ipsum dolor sit amet consectetur. Sit egestas parturient velit
					hendrerit consectetur nisi luctus interdum volutpat. Non ac a purus
					massa elit lectus. Condimentum eu vel proin egestas curabitur ornare
					nunc diam. Nibh tellus morbi mollis eget pellentesque interdum odio
					et. Eget nunc ac felis ipsum neque vitae. Nisl nulla varius et ut sed.
					Amet tincidunt vel pretium velit tristique vestibulum auctor pharetra
					et. Quam tempor sed justo magnis. Pulvinar diam risus a ullamcorper
					arcu hendrerit facilisi. Lobortis hendrerit lobortis massa interdum
					est id. Elit laoreet arcu in odio. Massa pellentesque amet diam elit
					adipiscing faucibus morbi. Tincidunt gravida in quis quam in eu.
				</p>
			</Wrapper>
		</Layout>
	</AppProviders>
);

export default IndexPage;

export function Head() {
	return <title>{test}</title>;
}
