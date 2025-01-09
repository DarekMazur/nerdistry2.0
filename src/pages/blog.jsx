import * as React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { useEffect, useState } from 'react';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import InfiniteScroll from 'react-infinite-scroll-component';
import Layout from '../components/templates/Layout/Layout';
import AppProviders from '../providers/AppProviders';
import EmptyBlog from '../components/atoms/EmptyBlog/EmptyBlog';
import SinglePostExcerpt from '../components/molecules/SinglePostExcerpt/SinglePostExcerpt';
import { StyledMainBlog } from '../components/molecules/MainBlog/MainBlog.styles';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import Loading from '../components/atoms/Loading/Loading';
import { ScrollEndMessage } from '../components/atoms/ScrollEndMessage/ScrollEndMessage.styles';
import { useIndexContent } from '../hooks/useIndexContent';
import { usePageIdentity } from '../hooks/usePageIdentity';
import useScrollPosition from '../hooks/useScrollPosition';
import { useCategories } from '../hooks/useCategories';
import Checkbox from '../components/atoms/Checkbox/Checkbox';
import { FiltersLabel } from '../components/atoms/FiltersLabel/FiltersLabel.styles';
import { CategoryFilters } from '../components/molecules/CategoryFilters/CategoryFilters.styles';

const BlogPage = () => {
	const { t } = useTranslation();
	const { i18n } = useI18next();

	const { allStrapiPost } = useIndexContent();
	const { allStrapiCategory } = useCategories();
	const { strapiIdentity } = usePageIdentity();

	const posts = allStrapiPost.edges;
	const categories = allStrapiCategory.edges;

	const [postsList, setPostList] = useState(allStrapiPost.edges.slice(0, 2));
	const [hasMore, setHasMore] = useState(true);
	const [isHidden, setIsHidden] = useState(true);
	const [isOpen, setIsOpen] = useState(false);

	const getMorePosts = () => {
		const newPosts = posts.slice(postsList.length, postsList.length + 2);
		// eslint-disable-next-line no-shadow
		setPostList((postsList) => [...postsList, ...newPosts]);
	};

	const scrollPosition = useScrollPosition();

	useEffect(
		() =>
			scrollPosition > window.innerHeight - 100
				? setIsHidden(false)
				: setIsHidden(true),
		[scrollPosition]
	);

	useEffect(() => {
		setHasMore(posts.length > postsList.length);
	}, [postsList]);

	return (
		<AppProviders>
			<Helmet>
				<title>Blog | Nerdistry</title>
				<meta
					name="description"
					content={strapiIdentity.Slogan || t('identification.slogan')}
				/>
			</Helmet>
			<Layout title="Blog" isSubtitleHidden>
				{i18n.resolvedLanguage === 'ru' ? (
					<Wrapper title={t('main.feturedTitle')} isWide isBig />
				) : (
					<Wrapper title={strapiIdentity.Slogan || t('identification.slogan')}>
						{categories.length ? (
							<CategoryFilters $hidden={isHidden} $open={isOpen}>
								<FiltersLabel
									type="button"
									onClick={() => setIsOpen((prevState) => !prevState)}
								>
									Kategorie
								</FiltersLabel>
								<ul>
									{categories.map((category) => (
										<Checkbox
											key={category.node.id}
											label={`${category.node.Name} (${
												category.node.posts ? category.node.posts.length : '0'
											})`}
											name={category.node.Name}
											onClick={() => console.log(`${category.node.Name}`)}
										/>
									))}
									<button type="button">Clear filters</button>
									<button type="button">Apply all filters</button>
								</ul>
							</CategoryFilters>
						) : null}
						{allStrapiPost.edges.length ? (
							<StyledMainBlog
								as={InfiniteScroll}
								dataLength={postsList.length}
								next={getMorePosts}
								hasMore={hasMore}
								loader={<Loading />}
								endMessage={
									<ScrollEndMessage>{t('blog.postsEnd')}</ScrollEndMessage>
								}
							>
								{postsList.map((post) => (
									<SinglePostExcerpt
										key={post.node.id}
										post={post.node}
										postsLength={postsList.length}
									/>
								))}
							</StyledMainBlog>
						) : (
							<EmptyBlog />
						)}
					</Wrapper>
				)}
			</Layout>
		</AppProviders>
	);
};
export default BlogPage;

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
