/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: `Nerdisty`,
		siteUrl: process.env.GATSBY_URL,
	},
	flags: {
		DEV_SSR: process.env.GATSBY_DEBUGGER,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		'gatsby-plugin-styled-components',
		'gatsby-plugin-image',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/assets/icons/Logo.svg',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/locales`,
				name: `locale`,
			},
		},
		{
			resolve: 'gatsby-plugin-react-i18next',
			options: {
				languages: [`en`, `pl`, `uk`, `ru`],
				defaultLanguage: 'pl',
				fallbackLanguage: 'en',
				i18nextOptions: {
					debug: process.env.GATSBY_DEBUGGER,
					fallbackLng: 'en',
					supportedLngs: [`en`, `pl`, `uk`, `ru`],
					defaultNS: 'translation',
					interpolation: {
						escapeValue: false,
					},
				},
			},
		},
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				trackingIds: [`${process.env.GATSBY_TRACKING_ID}`],
				gtagConfig: {
					optimize_id: 'OPT_CONTAINER_ID',
					anonymize_ip: true,
					cookie_expires: 0,
				},
				pluginConfig: {
					head: false,
					respectDNT: true,
					exclude: ['/preview/**', '/do-not-track/me/too/'],
					delayOnRouteUpdate: 0,
				},
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Montserrat: 400,400i,700,900`,
					`Montserrat Alternates: 400,700`,
					`Montserrat Subrayada`,
					`Share Tech Mono`,
					`Russo One`,
					`Inconsolata`,
				],
				display: 'swap',
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /icons/,
				},
			},
		},
		{
			resolve: 'gatsby-source-strapi-graphql',
			options: {
				apiURL: process.env.GATSBY_STRAPI_API_URL,
				collectionTypes: ['Post', 'Category'],
				singleTypes: [
					'Home',
					'Identity',
					'MainMenu',
					'FooterMenu',
					'SocialMenu',
				],
				token: process.env.GATSBY_STRAPI_TOKEN,
				preview: true,
				cache: false,
			},
		},
	],
};
