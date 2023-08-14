export const getFeaturedPosts = (postArray) =>
	postArray.filter((post) => post.node.Feature === true);
