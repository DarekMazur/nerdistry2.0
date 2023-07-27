/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: `nerdistry_gatsbyjs`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		'gatsby-plugin-styled-components',
		'gatsby-plugin-image',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/icon.png',
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
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				// You can add multiple tracking ids and a pageview event will be fired for all of them.
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
					`Montserrat: 400,400i,700`,
					`Montserrat Alternates: 400,700`,
					`Montserrat Subrayada`,
					`Notable`,
					`Share Tech Mono`,
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
				apiURL: process.env.GATSBY_STRAPI_API_URL || 'http://localhost:1339',
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
