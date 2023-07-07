import * as React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = () => {
	return (
		<main>
			{process.env.NODE_ENV === 'development' ? (
				<>
					<br />
					Try creating a page in <code>src/pages/</code>.
					<br />
				</>
			) : null}
			<br />
			<Link to="/">Go home</Link>.
		</main>
	);
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
