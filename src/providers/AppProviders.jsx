import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from '../store';
import { theme } from '../utils/theme';
import '../utils/i18n';

const AppProviders = ({ children }) => (
	<Provider store={store}>
		<ThemeProvider theme={theme}>{children}</ThemeProvider>
	</Provider>
);

export default AppProviders;

AppProviders.propTypes = {
	children: PropTypes.node.isRequired,
};
