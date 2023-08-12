const path = require('path');
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;

	const homeData = await graphql(`
		{
			allStrapiPost(sort: { publishedAt: DESC }) {
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
					}
				}
			}
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
			strapiIdentity {
				Title
				Slogan
			}
		}
	`);

	const blogData = await graphql(`
		query {
			allStrapiPost(sort: { publishedAt: DESC }) {
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
					}
				}
			}
			strapiIdentity {
				Slogan
			}
		}
	`);

	const socialData = await graphql(`
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

	const categoriesResults = await graphql(`
		{
			allStrapiCategory {
				edges {
					node {
						Name
						Description
						posts {
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
					}
				}
			}
		}
	`);

	const postsResults = await graphql(`
		{
			allStrapiPost(sort: { publishedAt: DESC }) {
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

	if (homeData.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	if (blogData.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	if (categoriesResults.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	if (postsResults.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}

	const indexTemplate = path.resolve(`src/pages/index.jsx`);
	createPage({
		path: `/`,
		component: indexTemplate,
		context: {
			home: homeData.data,
		},
	});

	const blogTemplate = path.resolve(`src/pages/blog.jsx`);
	createPage({
		path: `/blog`,
		component: blogTemplate,
		context: {
			blog: blogData.data,
		},
	});

	const contactTemplate = path.resolve(`src/pages/contact.jsx`);
	createPage({
		path: `/contact`,
		component: contactTemplate,
		context: {
			contact: socialData.data.strapiSocialMenu,
		},
	});

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
