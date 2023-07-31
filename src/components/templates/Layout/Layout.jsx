import * as React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { graphql, useStaticQuery } from 'gatsby';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';
import { GlobalStyle } from '../../../styles/globalStyle';

const Layout = ({ children, title, subtitle, isSubtitleHidden }) => {
	const layoutData = useStaticQuery(graphql`
		query {
			strapiIdentity {
				Title
				Logo {
					url
				}
				Slogan
			}
		}
	`);

	const isDark = useSelector((state) => state.isDark);

	return (
		<>
			<GlobalStyle $dark={isDark} />
			<Header
				pageInfo={layoutData.strapiIdentity}
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
