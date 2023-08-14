import * as React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StyledPrivacyContent } from './PrivacyContent.styles';

const PrivacyContent = () => {
	const isDark = useSelector((state) => state.isDark);

	const { t } = useTranslation();

	return (
		<StyledPrivacyContent $dark={isDark}>
			<p>{t('privacy.content.header')}</p>
			<ol>
				<li>
					{t('privacy.content.generalInformation.header')}
					<ol>
						<li>{t('privacy.content.generalInformation.content.1')}</li>
						<li>{t('privacy.content.generalInformation.content.2')}</li>
						<li>{t('privacy.content.generalInformation.content.3')}</li>
						<li>{t('privacy.content.generalInformation.content.4')}</li>
						<li>
							{t('privacy.content.generalInformation.content.5.header')}
							<ul>
								<li>{t('privacy.content.generalInformation.content.5.1')}</li>
								<li>{t('privacy.content.generalInformation.content.5.2')}</li>
							</ul>
						</li>
						<li>
							{t('privacy.content.generalInformation.content.6.header')}
							<ul>
								<li>{t('privacy.content.generalInformation.content.6.1')}</li>
								<li>{t('privacy.content.generalInformation.content.6.2')}</li>
							</ul>
						</li>
					</ol>
				</li>

				<li>
					{t('privacy.content.dataProtection.header')}
					<ol>
						<li>{t('privacy.content.dataProtection.content.1')}</li>
						<li>{t('privacy.content.dataProtection.content.2')}</li>
						<li>{t('privacy.content.dataProtection.content.3')}</li>
						<li>{t('privacy.content.dataProtection.content.4')}</li>
						<li>{t('privacy.content.dataProtection.content.5')}</li>
						<li>{t('privacy.content.dataProtection.content.6')}</li>
					</ol>
				</li>

				<li>
					{t('privacy.content.hosting.header')}
					<ol>
						<li>{t('privacy.content.hosting.content.1')}</li>
					</ol>
				</li>

				<li>
					{t('privacy.content.userRights.header')}
					<ol>
						<li>{t('privacy.content.userRights.content.1')}</li>
						<li>{t('privacy.content.userRights.content.2')}</li>
						<li>{t('privacy.content.userRights.content.3')}</li>
						<li>{t('privacy.content.userRights.content.4')}</li>
						<li>{t('privacy.content.userRights.content.5')}</li>
						<li>{t('privacy.content.userRights.content.6')}</li>
						<li>{t('privacy.content.userRights.content.7')}</li>
						<li>{t('privacy.content.userRights.content.8')}</li>
					</ol>
				</li>

				<li>
					{t('privacy.content.formsInformations.header')}
					<ol>
						<li>{t('privacy.content.formsInformations.content.1')}</li>
						<li>{t('privacy.content.formsInformations.content.2')}</li>
						<li>{t('privacy.content.formsInformations.content.3')}</li>
						<li>{t('privacy.content.formsInformations.content.4')}</li>
					</ol>
				</li>

				<li>
					{t('privacy.content.adminLogs.header')}
					<ol>
						<li>{t('privacy.content.adminLogs.content.1')}</li>
					</ol>
				</li>

				<li>
					{t('privacy.content.marketing.header')}
					<ol>
						<li>{t('privacy.content.marketing.content.1')}</li>
					</ol>
				</li>

				<li>
					{t('privacy.content.cookies.header')}
					<ol>
						<li>{t('privacy.content.cookies.content.1')}</li>
						<li>{t('privacy.content.cookies.content.2')}</li>
						<li>{t('privacy.content.cookies.content.3')}</li>
						<li>
							{t('privacy.content.cookies.content.4.header')}
							<ol>
								<li>{t('privacy.content.cookies.content.4.1')}</li>
								<li>{t('privacy.content.cookies.content.4.2')}</li>
							</ol>
						</li>
						<li>{t('privacy.content.cookies.content.5')}</li>
						<li>{t('privacy.content.cookies.content.6')}</li>
						<li>{t('privacy.content.cookies.content.7')}</li>
						<li>{t('privacy.content.cookies.content.8')}</li>
					</ol>
				</li>

				<li>
					{t('privacy.content.cookiesManaging.header')}
					<ol>
						<li>{t('privacy.content.cookiesManaging.content.1')}</li>
						<li>
							{t('privacy.content.cookiesManaging.content.2.header')}
							<ul>
								<li>{t('privacy.content.cookiesManaging.content.2.1')}</li>
								<li>{t('privacy.content.cookiesManaging.content.2.2')}</li>
								<li>{t('privacy.content.cookiesManaging.content.2.3')}</li>
								<li>{t('privacy.content.cookiesManaging.content.2.4')}</li>
								<li>{t('privacy.content.cookiesManaging.content.2.5')}</li>
								<li>{t('privacy.content.cookiesManaging.content.2.6')}</li>
							</ul>
							{t('privacy.content.cookiesManaging.content.mobile.header')}
							<ul>
								<li>{t('privacy.content.cookiesManaging.content.mobile.1')}</li>
								<li>{t('privacy.content.cookiesManaging.content.mobile.2')}</li>
								<li>{t('privacy.content.cookiesManaging.content.mobile.3')}</li>
							</ul>
						</li>
					</ol>
				</li>
			</ol>
		</StyledPrivacyContent>
	);
};

export default PrivacyContent;
