const path = require('path');
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;

	const categoriesResults = await graphql(`
		{
			allStrapiCategory(filter: { publishedAt: { ne: null } }) {
				edges {
					node {
						Name
						Description
						posts {
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
							User {
								documentId
							}
						}
					}
				}
			}
		}
	`);

	const postsResults = await graphql(`
		{
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
						User {
							documentId
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

	if (categoriesResults.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	if (postsResults.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	const articleTemplate = path.resolve(`src/pages/singlePost.jsx`);
	postsResults.data.allStrapiPost.edges.forEach((edge) => {
		createPage({
			path: `/blog/${slugify(edge.node.Title)}`,
			component: articleTemplate,
			context: {
				article: edge,
			},
		});
	});

	const categoryTemplate = path.resolve(`src/pages/categoryPage.jsx`);
	categoriesResults.data.allStrapiCategory.edges.forEach((edge) => {
		createPage({
			path: `/category/${slugify(edge.node.Name)}`,
			component: categoryTemplate,
			context: {
				category: edge.node,
			},
		});
	});
};
