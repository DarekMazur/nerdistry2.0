import * as React from 'react';
import { useEffect, useState } from 'react';

const RecentProjects = () => {
	const [projects, setProjects] = useState('');

	useEffect(() => {
		async function getProjectsList() {
			const res = await fetch(
				`${process.env.GATSBY_PUBLIC_GITHUB_API_LINK}/users/${process.env.GATSBY_PUBLIC_GITHUB_USER}/repos`
			);
			const unsortedRepos = await res.json();
			const repos = unsortedRepos.sort((a, b) => {
				const dateA = new Date(a.created_at);
				const dateB = new Date(b.created_at);
				return dateB - dateA;
			});

			setProjects(repos);
		}
		getProjectsList();
	}, []);

	return (
		// eslint-disable-next-line react/jsx-no-useless-fragment
		<>
			{projects ? (
				projects.slice(0, 3).map((project) => (
					<div>
						<h3>{project.name}</h3>
						<div>image</div>
						<div>
							<span>icon</span>
							<span>icon</span>
						</div>
					</div>
				))
			) : (
				<div>
					<h3>No recent projects...</h3>
				</div>
			)}
		</>
	);
};

export default RecentProjects;
