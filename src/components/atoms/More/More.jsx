import * as React from 'react';
import PropTypes from 'prop-types';

const More = ({ title }) => <div>{title}</div>;

export default More;

More.defaultProps = {
	title: 'Read more',
};

More.propTypes = {
	title: PropTypes.string,
};
