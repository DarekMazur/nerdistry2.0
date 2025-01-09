import { useStaticQuery, graphql } from 'gatsby';

export const useCategories = () => {
	const categoriesData = useStaticQuery(graphql`
		query {
			allStrapiCategory(filter: { publishedAt: { ne: null } }) {
				edges {
					node {
						id
						Name
						posts {
							id
						}
					}
				}
			}
		}
	`);
	return categoriesData;
};
