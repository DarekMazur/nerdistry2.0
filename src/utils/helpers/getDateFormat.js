export const getDateFormat = (date) => {
	const formatted = new Date(date);
	return `${String(formatted.getDate())}.${String(
		formatted.getMonth() + 1
	).padStart(2, '0')}.${formatted.getFullYear()}`;
};
