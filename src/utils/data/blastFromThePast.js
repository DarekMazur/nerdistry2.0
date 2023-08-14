import ranczo from '../../assets/images/blast/ranczo.jpg';
import sw from '../../assets/images/blast/sw.jpg';
import kwk from '../../assets/images/blast/kwk.jpg';
import ohp from '../../assets/images/blast/ohp.jpg';
import quiz from '../../assets/images/blast/quiz.jpg';

export const blasts = [
	{
		name: 'Ranczo pod Łysicą',
		techStack: [
			{
				Wordpress: '',
				JavaScript: '',
				jQuery: '',
				HTML5: '',
				CSS3: '',
				PHP: '',
				BEM: '',
			},
		],
		description:
			'Strona informacyjna motelu/hotelu dla koni, na podstawie projektu graficznego (wydaje się, że nie przetrwali lockdownu)',
		created_at: '10.01.2019',
		updated_at: null,
		homepage: '/',
		image: ranczo,
	},
	{
		name: 'Się Wypowiem',
		techStack: [
			{
				JavaScript: '',
				ReactJS: '',
				GatsbyJS: '',
				HTML5: '',
				CSS3: '',
				StyledComponents: '',
				GraphQL: '',
				GraphCMS: '',
			},
		],
		description: 'Blog osobisty.',
		created_at: '08.01.2019',
		updated_at: null,
		homepage: 'https://siewypowiem.pl/',
		image: sw,
	},
	{
		name: 'KW Kielce',
		techStack: [
			{
				PHP: '',
				JavaScript: '',
				HTML5: '',
				CSS3: '',
			},
		],
		description:
			'Strona Klubu Wspinaczkowego Kielce. Niestey klub się rozpadł i finalnie nigdy nie wyszła na produkcję ☹️',
		created_at: '06.01.2019',
		updated_at: null,
		homepage: 'http://demo.dariusz-mazur.pl/',
		image: kwk,
	},
	{
		name: 'Świętokrzyska Wojewódzka Komenda OHP',
		techStack: [
			{
				Wordpress: '',
				JavaScript: '',
				jQuery: '',
				HTML5: '',
				CSS3: '',
				PHP: '',
			},
		],
		description:
			'Oficjalna strona Świętokrzyskiej Wojewódzkiej Komendy Ohotniczych Hufców Pracy w Kielach.',
		created_at: '05.01.2018',
		updated_at: null,
		homepage: 'http://www.swietokrzyska.ohp.pl/',
		image: ohp,
	},
	{
		name: 'BatQuiz',
		techStack: [
			{
				JavaScript: '',
				jQuery: '',
				HTML5: '',
				CSS3: '',
				PHP: '',
			},
		],
		description: 'Prosty quiz w JavaScript/jQuery, pierwszy projekt w JS.',
		created_at: '09.01.2017',
		updated_at: null,
		homepage: 'http://www.batquiz.dariusz-mazur.pl/',
		image: quiz,
	},
];
