import * as React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes, { oneOfType } from 'prop-types';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, navigate } from 'gatsby';
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
	const { t } = useTranslation();
	const { i18n } = useI18next();
	const { article } = pageContext;
	const catList = [];
	if (article) {
		article.node.categories.map((category) => catList.push(category.Name));
	}

	React.useEffect(() => {
		if (!article) {
			navigate('/404');
		}
	}, []);

	return (
		<AppProviders>
			{article ? (
				<>
					<Helmet>
						<title>{article.node.Title} | Nerdistry</title>
						<meta name="description" content={article.node.Description} />
					</Helmet>
					<Layout title="Blog" subtitle={article.node.Title}>
						{i18n.resolvedLanguage === 'ru' ? (
							<Wrapper title={t('main.feturedTitle')} isWide isBig />
						) : (
							<>
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
							</>
						)}
					</Layout>
				</>
			) : (
				<div>Somethings goes wrong...</div>
			)}
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
