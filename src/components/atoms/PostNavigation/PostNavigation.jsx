import * as React from 'react';
import { Link } from 'gatsby';
import slugify from 'slugify';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import ArrowLeft from '../../../assets/icons/arrow-left-solid.svg';
import ArrowRight from '../../../assets/icons/arrow-right-solid.svg';
import { StyledPostNavigation } from './PostNavigation.styles';

const PostNavigation = ({ next, prev }) => {
	const isDark = useSelector((state) => state.isDark);

	const { t } = useTranslation();

	return (
		<StyledPostNavigation $prev={!!prev} $dark={isDark}>
			{prev ? (
				<Link to={`/blog/${slugify(prev.Title)}`}>
					<ArrowLeft /> {t('blog.post.previous')}
				</Link>
			) : null}

			{next ? (
				<Link to={`/blog/${slugify(next.Title)}`}>
					{t('blog.post.next')} <ArrowRight />
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
