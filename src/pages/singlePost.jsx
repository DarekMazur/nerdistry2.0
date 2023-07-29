import * as React from 'react';
import Layout from '../components/templates/Layout/Layout';
import AppProviders from '../providers/AppProviders';
import { StyledTag } from '../components/atoms/Tag/Tag.styles';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import { DetailsWrapper } from '../components/molecules/DetailsWrapper/DetailsWrapper.styles';
import Date from '../components/atoms/Date/Date';
import PostCoverWrapper from '../components/molecules/PostCoverWrapper/PostCoverWrapper';
import PostContent from '../components/molecules/PostContent/PostContent';

const test = 'Dolor';

const tags = 'lorem, ipsum, dolor';

const SinglePost = () => (
	<AppProviders>
		<Layout>
			<Wrapper title="Category">
				<DetailsWrapper>
					{tags.length === 0 ? null : (
						<p>
							{tags.split(', ').map((tag) => (
								<StyledTag key={tag}>#{tag}</StyledTag>
							))}
						</p>
					)}
					<Date date="01.01.2001" size="1.6rem" />
				</DetailsWrapper>
			</Wrapper>
			<PostCoverWrapper />
			<PostContent />
			<div>
				<p>Previous</p>
				<p>Next</p>
			</div>
		</Layout>
	</AppProviders>
);

export default SinglePost;

export function Head() {
	return <title>{test}</title>;
}
