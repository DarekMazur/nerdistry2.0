import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import { GlobalStyle } from '../../../styles/globalStyle';
import { usePageIdentity } from '../../../hooks/usePageIdentity';

const Layout = ({ children, title, subtitle, isSubtitleHidden }) => {
	const { strapiIdentity } = usePageIdentity();

	const isDark = useSelector((state) => state.isDark);

	return (
		<>
			<GlobalStyle $dark={isDark} />
			<Header
				pageInfo={strapiIdentity}
				title={title}
				subtitle={subtitle}
				isSubtitleHidden={isSubtitleHidden}
			/>
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;

Layout.defaultProps = {
	title: '',
	subtitle: '',
	isSubtitleHidden: false,
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	isSubtitleHidden: PropTypes.bool,
};
