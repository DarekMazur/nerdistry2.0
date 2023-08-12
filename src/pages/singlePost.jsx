import * as React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes, { oneOfType } from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/templates/Layout/Layout';
import AppProviders from '../providers/AppProviders';
import { StyledTag } from '../components/atoms/Tag/Tag.styles';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import { DetailsWrapper } from '../components/molecules/DetailsWrapper/DetailsWrapper.styles';
import Date from '../components/atoms/Date/Date';
import PostCoverWrapper from '../components/molecules/PostCoverWrapper/PostCoverWrapper';
import PostContent from '../components/molecules/PostContent/PostContent';
import PostNavigation from '../components/atoms/PostNavigation/PostNavigation';
import { getDateFormat } from '../utils/helpers/getDateFormat';

const SinglePost = ({ pageContext }) => {
	const { article } = pageContext;
	const catList = [];
	article.node.categories.map((category) => catList.push(category.Name));

	return (
		<AppProviders>
			<Helmet>
				<title>{article.node.Title} | Nerdistry</title>
				<meta name="description" content={article.node.Description} />
			</Helmet>
			<Layout title="Blog" subtitle={article.node.Title}>
				<Wrapper titleArray={catList}>
					<DetailsWrapper>
						{article.node.Tags.length === 0 ? null : (
							<p>
								{article.node.Tags.split(', ').map((tag) => (
									<StyledTag key={tag}>#{tag}</StyledTag>
								))}
							</p>
						)}
						<Date
							date={getDateFormat(article.node.publishedAt)}
							size="1.6rem"
						/>
					</DetailsWrapper>
				</Wrapper>
				<PostCoverWrapper
					coverUrl={article.node.CoverImage.url}
					postTitle={article.node.Title}
					userID={article.node.User.data.id}
				/>
				<PostContent content={article.node.Content} />
				<PostNavigation next={article.previous} prev={article.next} />
			</Layout>
		</AppProviders>
	);
};

export default SinglePost;

SinglePost.propTypes = {
	pageContext: PropTypes.shape({
		article: PropTypes.shape({
			node: PropTypes.shape({
				Title: PropTypes.string,
				Description: PropTypes.string,
				Tags: PropTypes.string,
				publishedAt: PropTypes.string,
				categories: PropTypes.arrayOf(oneOfType([PropTypes.object])),
				Content: PropTypes.string,
				CoverImage: PropTypes.shape({
					url: PropTypes.string,
				}),
				User: PropTypes.shape({
					data: PropTypes.shape({
						id: PropTypes.string,
					}),
				}),
			}),
			next: PropTypes.objectOf(PropTypes.string),
			previous: PropTypes.objectOf(PropTypes.string),
		}),
	}).isRequired,
};

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
