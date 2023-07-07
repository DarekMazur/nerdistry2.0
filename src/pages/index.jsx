import * as React from 'react';
import { useEffect, useState } from 'react';

const test = 'Lorem Ipsum';

function IndexPage() {
	const [testData, setTestData] = useState([]);
	const testFetchData = () => {
		fetch(`${process.env.GATSBY_API_URL}?populate=*`)
			.then((res) => res.json())
			.then((data) => {
				setTestData(data);
			});
	};

	useEffect(() => {
		testFetchData();
	}, []);

	return (
		<main>
			{testData.data.map((el) => (
				<>
					<h3>{el.attributes.Title}</h3>
					<p>{el.attributes.User.data.attributes.username}</p>
					<p>{el.attributes.Content}</p>
				</>
			))}
		</main>
	);
}

export default IndexPage;

export function Head() {
	return <title>{test}</title>;
}
