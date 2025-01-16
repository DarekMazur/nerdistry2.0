import { useStaticQuery, graphql } from 'gatsby';

export const usePageMeta = () => {
	const pageMeta = useStaticQuery(graphql`
		query {
			strapiHome {
				internal {
					content
				}
			}
		}
	`);

	return pageMeta;
};
