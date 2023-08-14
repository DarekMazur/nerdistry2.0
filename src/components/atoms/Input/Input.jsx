import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { InputWrapper, Label, StyledInput } from './Input.styles';
import { P } from '../P/P.styles';

const Input = ({
	tag: Tag,
	type,
	name,
	id,
	label,
	isRequired,
	onChange,
	value,
	errorMessage,
	isChecked,
}) => {
	const [isBlur, setIsBlur] = useState(false);
	const isDark = useSelector((state) => state.isDark);

	const handleOnFocus = () => {
		setIsBlur(true);
	};

	const handleOnBlur = (e) => {
		if (e.target.value === '') {
			setIsBlur(false);
		}
	};

	return (
		<InputWrapper>
			<Label
				htmlFor={name}
				$blur={type === 'checkbox' ? false : isBlur}
				type={type}
			>
				{label}
			</Label>
			<StyledInput
				as={Tag}
				type={type}
				name={name}
				id={id}
				onChange={onChange}
				value={value}
				required={isRequired}
				onFocus={handleOnFocus}
				onBlur={handleOnBlur}
				$error={errorMessage !== null}
				checked={isChecked}
				$dark={isDark}
			/>
			{errorMessage ? (
				<P $red as="div">
					{errorMessage}
				</P>
			) : null}
		</InputWrapper>
	);
};

Input.propTypes = {
	tag: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
	onChange: PropTypes.func.isRequired,
	isRequired: PropTypes.bool,
	errorMessage: PropTypes.node,
	isChecked: PropTypes.bool,
};

Input.defaultProps = {
	tag: 'input',
	type: 'text',
	isRequired: false,
	errorMessage: null,
	isChecked: null,
};

export default Input;
