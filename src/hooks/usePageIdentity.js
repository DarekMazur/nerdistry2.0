import { useStaticQuery, graphql } from 'gatsby';

export const usePageIdentity = () => {
	const pageIdentity = useStaticQuery(graphql`
		query {
			strapiIdentity {
				Title
				Slogan
			}
		}
	`);
	return pageIdentity;
};
