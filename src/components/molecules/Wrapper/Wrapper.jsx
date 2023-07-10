import * as React from 'react';
import PropTypes from 'prop-types';

function Wrapper({ children, title }) {
	return (
		<>
			<h3>{title}</h3>
			{children}
		</>
	);
}

Wrapper.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
};

export default Wrapper;
