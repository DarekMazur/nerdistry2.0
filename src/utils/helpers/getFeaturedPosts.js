export const getFeaturedPosts = (postArray) =>
	postArray.filter((post) => post.attributes.isFeatured === true);
