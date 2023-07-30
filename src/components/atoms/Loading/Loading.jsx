import * as React from 'react';
import { useSelector } from 'react-redux';
import { Loader, LoaderWrapper } from './Loading.styles';
import { LoaderElement } from '../LoadingElement/LoadingElement.styles';

const Loading = () => {
	const isDark = useSelector((state) => state.isDark);

	return (
		<LoaderWrapper>
			<Loader>
				<LoaderElement $dark={isDark} />
				<LoaderElement $dark={isDark} />
				<LoaderElement $dark={isDark} />
				<LoaderElement $dark={isDark} />
			</Loader>
		</LoaderWrapper>
	);
};
export default Loading;
