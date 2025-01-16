import { useStaticQuery, graphql } from 'gatsby';

export const useIndexContent = () => {
	const homeData = useStaticQuery(graphql`
		query {
			allStrapiPost(
				filter: { publishedAt: { ne: null } }
				sort: { publishedAt: DESC }
			) {
				edges {
					node {
						id
						Title
						Description
						Content {
							data {
								Content
							}
						}
						publishedAt
						Tags
						Feature
						categories {
							Name
						}
						CoverImage {
							url
						}
					}
				}
			}
		}
	`);
	return homeData;
};
