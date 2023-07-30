const path = require('path');
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;

	// const categoriesResults = await graphql(
	// 	`
	//     {
	//       allStrapiCategory {
	// 		    edges {
	// 		      node {
	// 		        Name
	// 		        Description
	// 		        posts {
	// 							id
	// 							Title
	// 							Description
	// 							Content
	// 							publishedAt
	// 							Tags
	// 							Feature
	// 							categories {
	// 								Name
	// 							}
	// 							CoverImage {
	// 								url
	// 							}
	// 							User {
	// 			          data {
	// 			            id
	// 			          }
	// 			        }
	// 						}
	// 		      }
	// 		    }
	// 		  }
	//     }
	//   `
	// )

	const result = await graphql(`
		{
			allStrapiPost(limit: 1000, sort: { publishedAt: DESC }) {
				edges {
					node {
						id
						Title
						Description
						Content
						publishedAt
						Tags
						Feature
						categories {
							Name
						}
						CoverImage {
							url
						}
						User {
							data {
								id
							}
						}
					}
					next {
						Title
					}
					previous {
						Title
					}
				}
			}
		}
	`);

	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	const articleTemplate = path.resolve(`src/pages/singlePost.jsx`);
	result.data.allStrapiPost.edges.forEach((edge) => {
		createPage({
			path: `/blog/${slugify(edge.node.Title)}`,
			component: articleTemplate,
			context: {
				article: edge,
			},
		});
	});
};
