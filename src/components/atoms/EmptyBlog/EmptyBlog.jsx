import * as React from 'react';
import empty from '../../../assets/images/empty.svg';
import { StyledEmptyBlog } from './EmptyBlog.styles';

const EmptyBlog = () => (
	<StyledEmptyBlog>
		<h3>It&apos;s quiet... too quiet...</h3>
		<img src={empty} alt="" />
		<p>Please come back later</p>
	</StyledEmptyBlog>
);

export default EmptyBlog;
