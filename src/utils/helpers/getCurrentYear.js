export const getCurrentYear = () => {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();

	return currentYear;
};
