import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/templates/Layout/Layout';
import Wrapper from '../components/molecules/Wrapper/Wrapper';
import AppProviders from '../providers/AppProviders';

const ContactPage = () => (
	<AppProviders>
		<Helmet>
			<title>Contact | Nerdistry</title>
			<meta name="description" content="lorem ipsum" />
		</Helmet>
		<Layout title="Contact" isSubtitleHidden>
			<Wrapper title="Stay in contact!">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet
					asperiores cum doloribus esse in incidunt inventore, nemo omnis porro
					qui repudiandae sit soluta tempora unde ut vero. Alias amet asperiores
					aspernatur blanditiis commodi consequatur corporis cumque deleniti
					dicta dignissimos dolore doloremque error eum ex facere fugiat ipsa
					iste labore laboriosam, magnam magni modi necessitatibus nemo nulla
					odit quam quibusdam quisquam, ratione rem rerum saepe sapiente sed
					suscipit tempora tempore vero voluptatibus! Corporis culpa deserunt
					est et, eveniet excepturi fugiat inventore ipsam, iste laborum minus
					natus neque reprehenderit tempora ut, voluptatem voluptates. Adipisci
					blanditiis cum eum, quos similique voluptates. A!
				</p>
				<div>ICONS</div>
				<div>FORM</div>
			</Wrapper>
		</Layout>
	</AppProviders>
);

export default ContactPage;
