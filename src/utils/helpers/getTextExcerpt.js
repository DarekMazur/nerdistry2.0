export const getTextExcerpt = (str, maxLen, separator = ' ') => {
	if (str.length <= maxLen) return str;
	return str.substring(0, str.lastIndexOf(separator, maxLen));
};
