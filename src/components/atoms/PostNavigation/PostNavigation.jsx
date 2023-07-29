import * as React from 'react';
import { Link } from 'gatsby';
import ArrowLeft from '../../../assets/icons/arrow-left-solid.svg';
import ArrowRight from '../../../assets/icons/arrow-right-solid.svg';
import { StyledPostNavigation } from './PostNavigation.styles';

const PostNavigation = () => (
	<StyledPostNavigation>
		<Link to="/singlePost">
			<ArrowLeft /> Previous
		</Link>
		<Link to="/singlePost">
			Next <ArrowRight />
		</Link>
	</StyledPostNavigation>
);

export default PostNavigation;
