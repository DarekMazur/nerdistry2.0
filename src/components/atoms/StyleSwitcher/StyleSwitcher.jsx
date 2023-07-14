import * as React from 'react';
import SunIcon from '../../../assets/icons/sun-regular.svg';
import MoonIcon from '../../../assets/icons/moon-solid.svg';

const StylesSwitcher = () => (
	<>
		<div>
			<img src={SunIcon} alt="" />
		</div>
		<div>
			<img src={MoonIcon} alt="" />
		</div>
	</>
);

export default StylesSwitcher;
