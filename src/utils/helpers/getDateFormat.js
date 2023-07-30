export const getDateFormat = (date) => {
	const formatted = new Date(date);
	return `${String(formatted.getDate()).padStart(2, '0')}.${String(
		formatted.getMonth() + 1
	).padStart(2, '0')}.${formatted.getFullYear()}`;
};
