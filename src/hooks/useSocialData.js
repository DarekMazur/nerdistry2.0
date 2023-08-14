import { useStaticQuery, graphql } from 'gatsby';

export const useSocialData = () => {
	const socialData = useStaticQuery(graphql`
		query {
			strapiSocialMenu {
				url {
					id
					platformName
					socialLink
				}
			}
		}
	`);
	return socialData;
};
