import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { StyledButton } from './Button.styles';

const Button = ({
	primaryText,
	secondaryText,
	loadingText,
	type,
	disabled,
	isLoading,
	isSuccess,
}) => {
	const [isSent, setIsSent] = useState(false);
	const isDark = useSelector((state) => state.isDark);

	useEffect(() => {
		setIsSent(isSuccess);
	}, [isSuccess]);

	return (
		<StyledButton
			$dark={isDark}
			$loading={isLoading}
			$success={isSent}
			type={type}
			disabled={disabled}
		>
			<span>{primaryText}</span>
			{loadingText ? <span>{loadingText}</span> : null}
			{secondaryText ? <span>{secondaryText}</span> : null}
		</StyledButton>
	);
};

export default Button;

Button.defaultProps = {
	disabled: false,
	isSuccess: false,
};

Button.propTypes = {
	primaryText: PropTypes.string.isRequired,
	secondaryText: PropTypes.string.isRequired,
	loadingText: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	isLoading: PropTypes.bool.isRequired,
	isSuccess: PropTypes.bool,
};
