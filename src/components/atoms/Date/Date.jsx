import * as React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StyledDate } from './Date.styles';

const Date = ({ date, size }) => {
	const { t } = useTranslation();
	return (
		<StyledDate $size={size}>
			<span>{t('blog.post.postedOn')}</span> {date}
		</StyledDate>
	);
};

export default Date;

Date.defaultProps = {
	size: null,
};

Date.propTypes = {
	date: PropTypes.string.isRequired,
	size: PropTypes.string,
};
