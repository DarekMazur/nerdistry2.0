import { useStaticQuery, graphql } from 'gatsby';

export const usePageIdentity = () => {
	const pageIdentity = useStaticQuery(graphql`
		query {
			strapiIdentity {
				internal {
					content
				}
			}
		}
	`);

	return pageIdentity;
};
