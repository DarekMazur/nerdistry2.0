import * as React from 'react';
import { navigate, graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import AppProviders from '../providers/AppProviders';
import {
	Styled404,
	StyledErrorCode,
	StyledLink,
	StyledNoise,
	StyledOutput,
	StyledTerminal,
	Styledoverlay,
} from '../components/molecules/Page404/Page404.styles';

const NotFoundPage = () => {
	const { t } = useTranslation();

	const handleBack = (e) => {
		e.preventDefault();
		navigate(-1);
	};
	return (
		<AppProviders>
			<Styled404>
				<StyledNoise />
				<Styledoverlay />
				<StyledTerminal>
					<h1>
						{t('404.error')} <StyledErrorCode>404</StyledErrorCode>
					</h1>
					<StyledOutput>{t('404.message')}</StyledOutput>
					<StyledOutput>
						{t('404.try')}{' '}
						<StyledLink to="/" onClick={handleBack}>
							{t('404.goBack')}
						</StyledLink>{' '}
						{t('404.or')} <StyledLink to="/">{t('404.return')}</StyledLink>.
					</StyledOutput>
					<StyledOutput>{t('404.goodLuck')}</StyledOutput>
				</StyledTerminal>
			</Styled404>
		</AppProviders>
	);
};

export default NotFoundPage;

export const Head = () => <title>404 | Nerdistry</title>;

export const query = graphql`
	query ($language: String!) {
		locales: allLocale(filter: { language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`;
