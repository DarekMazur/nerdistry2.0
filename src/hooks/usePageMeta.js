import { useStaticQuery, graphql } from 'gatsby';

export const usePageMeta = () => {
	const pageMeta = useStaticQuery(graphql`
		query {
			strapiHome {
				FeaturedPostsTitle
				RecentProjectsTitle
				ProjectsLink
				BlogTitle
				BlogLink
				AboutTitle
				AboutCover {
					name
					url
				}
				AboutContent
			}
		}
	`);
	return pageMeta;
};
