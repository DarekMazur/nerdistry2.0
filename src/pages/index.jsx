import * as React from 'react';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import { theme } from '../utils/theme';
import { GlobalStyle } from '../styles/globalStyle';

const test = 'Lorem Ipsum';

const IndexPage = () => {
	const [DarkMode, setDarkMode] = useState(false);

	const handleVersionChange = () => setDarkMode((prevState) => !prevState);

	if (localStorage.getItem('version')) {
		setDarkMode(localStorage.getItem('version'));
	}

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Header version={DarkMode} handleVersionChange={handleVersionChange} />
			<main>
				<Wrapper title="Header 1">
					<div>
						<div>
							<span>date, Category</span>
						</div>
						<h3>Lorem Ipsum</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur. Nisl sit sed aliquam amet
							eleifend pulvinar. Adipiscing elementum id sit et vulputate
							elementum phasellus. Quam malesuada cras sed eu nunc. Et vitae
							fermentum iaculis nec aliquam.
						</p>
						<p>Timer</p>
					</div>
				</Wrapper>
				<Wrapper title="Header 2">
					<div>
						<h3>Lorem Ipsum</h3>
						<div>image</div>
						<div>
							<span>icon</span>
							<span>icon</span>
						</div>
					</div>
					<div>
						<h3>Lorem Ipsum</h3>
						<div>image</div>
						<div>
							<span>icon</span>
							<span>icon</span>
						</div>
					</div>
					<div>
						<h3>Lorem Ipsum</h3>
						<div>image</div>
						<div>
							<span>icon</span>
							<span>icon</span>
						</div>
					</div>
				</Wrapper>
				<Wrapper title="Header 3">
					<div>
						<div>
							<span>image</span>
						</div>
						<p>
							<span>posted on</span> data
						</p>
						<h4>Lorem Ipsum</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur. Eleifend commodo etiam
							ultrices augue nunc mauris pretium. Adipiscing volutpat placerat
							vitae eu gravida ac. Eu blandit euismod mollis faucibus.
						</p>
					</div>
					<div>
						<div>
							<span>image</span>
						</div>
						<p>
							<span>posted on</span> data
						</p>
						<h4>Lorem Ipsum</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur. Eleifend commodo etiam
							ultrices augue nunc mauris pretium. Adipiscing volutpat placerat
							vitae eu gravida ac. Eu blandit euismod mollis faucibus.
						</p>
					</div>
					<div>
						<div>
							<span>image</span>
						</div>
						<p>
							<span>posted on</span> data
						</p>
						<h4>Lorem Ipsum</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur. Eleifend commodo etiam
							ultrices augue nunc mauris pretium. Adipiscing volutpat placerat
							vitae eu gravida ac. Eu blandit euismod mollis faucibus.
						</p>
					</div>
					<div>
						<div>
							<span>image</span>
						</div>
						<p>
							<span>posted on</span> data
						</p>
						<h4>Lorem Ipsum</h4>
						<p>
							Lorem ipsum dolor sit amet consectetur. Eleifend commodo etiam
							ultrices augue nunc mauris pretium. Adipiscing volutpat placerat
							vitae eu gravida ac. Eu blandit euismod mollis faucibus.
						</p>
					</div>
					<p>Read more</p>
				</Wrapper>
				<Wrapper title="Header 4">
					<p>avatar</p>
					<p>
						Lorem ipsum dolor sit amet consectetur. Sit egestas parturient velit
						hendrerit consectetur nisi luctus interdum volutpat. Non ac a purus
						massa elit lectus. Condimentum eu vel proin egestas curabitur ornare
						nunc diam. Nibh tellus morbi mollis eget pellentesque interdum odio
						et. Eget nunc ac felis ipsum neque vitae. Nisl nulla varius et ut
						sed. Amet tincidunt vel pretium velit tristique vestibulum auctor
						pharetra et. Quam tempor sed justo magnis. Pulvinar diam risus a
						ullamcorper arcu hendrerit facilisi. Lobortis hendrerit lobortis
						massa interdum est id. Elit laoreet arcu in odio. Massa pellentesque
						amet diam elit adipiscing faucibus morbi. Tincidunt gravida in quis
						quam in eu.
					</p>
				</Wrapper>
			</main>
			<Footer />
		</ThemeProvider>
	);
};

export default IndexPage;

export function Head() {
	return <title>{test}</title>;
}
