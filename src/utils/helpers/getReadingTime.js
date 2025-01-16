export const getReadingTime = (content) => {
	const words = content?.trim().split(/\s+/).length;
	const wps = 225;
	return Math.ceil(words / wps);
};
