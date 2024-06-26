export const formatDateToCustomString = (date) => {
	const options = {
		year: 'numeric',
		month: 'short',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
	};

	return new Intl.DateTimeFormat('en-NG', options).format(new Date(date));
};
