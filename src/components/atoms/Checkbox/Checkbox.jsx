import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import PropTypes from 'prop-types';
import { StyledCheckbox } from './Checkbox.styles';

const Checkbox = ({ label, isChecked, onClick }) => (
	<li>
		<StyledCheckbox type="button" onClick={onClick}>
			{isChecked ? (
				<FontAwesomeIcon icon={['fas', 'check-square']} />
			) : (
				<FontAwesomeIcon icon={['fas', 'square']} />
			)}
		</StyledCheckbox>{' '}
		<span>{label}</span>
	</li>
);

Checkbox.defaultProps = {
	isChecked: true,
	onClick: () => {},
};

Checkbox.propTypes = {
	onClick: PropTypes.func,
	label: PropTypes.string.isRequired,
	isChecked: PropTypes.bool,
};

export default Checkbox;
