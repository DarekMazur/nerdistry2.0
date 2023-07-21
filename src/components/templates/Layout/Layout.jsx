import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import { GlobalStyle } from '../../../styles/globalStyle';

const Layout = ({ children }) => {
	const isDark = useSelector((state) => state.isDark);

	return (
		<>
			<GlobalStyle isDark={isDark} />
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};
