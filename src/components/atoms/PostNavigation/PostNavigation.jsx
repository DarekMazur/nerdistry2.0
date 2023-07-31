import * as React from 'react';
import { Link } from 'gatsby';
import slugify from 'slugify';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ArrowLeft from '../../../assets/icons/arrow-left-solid.svg';
import ArrowRight from '../../../assets/icons/arrow-right-solid.svg';
import { StyledPostNavigation } from './PostNavigation.styles';

const PostNavigation = ({ next, prev }) => {
	const isDark = useSelector((state) => state.isDark);

	return (
		<StyledPostNavigation $prev={!!prev} $dark={isDark}>
			{prev ? (
				<Link to={`/blog/${slugify(prev.Title)}`}>
					<ArrowLeft /> Previous
				</Link>
			) : null}

			{next ? (
				<Link to={`/blog/${slugify(next.Title)}`}>
					Next <ArrowRight />
				</Link>
			) : null}
		</StyledPostNavigation>
	);
};
export default PostNavigation;

PostNavigation.defaultProps = {
	next: null,
	prev: null,
};

PostNavigation.propTypes = {
	next: PropTypes.shape({
		Title: PropTypes.string,
	}),
	prev: PropTypes.shape({
		Title: PropTypes.string,
	}),
};
