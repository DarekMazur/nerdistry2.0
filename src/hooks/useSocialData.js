import { useStaticQuery, graphql } from 'gatsby';

export const useSocialData = () => {
	const socialData = useStaticQuery(graphql`
		query {
			strapiSocialMenu {
				internal {
					content
				}
			}
		}
	`);
	return socialData;
};
