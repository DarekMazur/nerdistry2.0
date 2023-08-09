import * as React from 'react';
import { useSelector } from 'react-redux';
import { StyledPrivacyContent } from './PrivacyContent.styles';

const PrivacyContent = () => {
	const isDark = useSelector((state) => state.isDark);

	return (
		<StyledPrivacyContent $dark={isDark}>
			<p>
				The privacy policy describes how we process information about you,
				including personal information and cookies, or so-called
				&quot;cookies&quot;. cookies.
			</p>
			<ol>
				<li>
					General information
					<ol>
						<li>
							This policy applies to the Website, operating under the url:
							nerdistry.pl
						</li>
						<li>
							The operator of the service and the Administrator of personal data
							is: Nerdistry
						</li>
						<li>
							Adres kontaktowy poczty elektronicznej operatora:
							rodo@nerdistry.pl
						</li>
						<li>
							The Operator is the Administrator of your personal data in with
							respect to the data you voluntarily provide on the Website.
						</li>
						<li>
							The Service uses personal data for the following purposes:
							<ul>
								<li>Running a newsletter</li>
								<li>Handling inquiries via form</li>
							</ul>
						</li>
						<li>
							The service performs functions of obtaining information about
							users and their behavior as follows:
							<ul>
								<li>
									Through voluntarily entered data in the forms, which are are
									entered into the Operator&apos;s systems.
								</li>
								<li>
									By storing cookies on end devices (so-called
									&quot;cookies&quot;).
								</li>
							</ul>
						</li>
					</ol>
				</li>

				<li>
					Selected data protection methods used by the Operator
					<ol>
						<li>
							The login and personal data entry sites are protected in the
							transmission layer (SSL certificate). This ensures that the
							personal data and login data, entered on the site, are encrypted
							in the user&apos;s computer and can only be read on the target
							server server.
						</li>
						<li>
							Personal data stored in the database are encrypted in such a way
							such that only those holding the Operator&apos;s key can read it.
							Thus, the data is protected in case the database is stolen from
							the server.
						</li>
						<li>
							User passwords are stored in hashed form. The hash function works
							unidirectionally - it is not possible to reverse its operation,
							which is now the modern standard for storing user passwords.
						</li>
						<li>
							The Service uses two-factor authentication, which provides an
							additional form of protection for logging into the Service.
						</li>
						<li>
							The operator periodically changes its administrative passwords.
						</li>
						<li>
							In order to protect the data, the Operator regularly makes backups
							security.
						</li>
						<li>
							An important element of data protection is the regular updating of
							any software used by the Operator to processing personal data,
							which in particular means regular updates of software components.
						</li>
					</ol>
				</li>

				<li>
					Hosting
					<ol>
						<li>
							The service is hosted (technically maintained) on the servers of
							the operator: Netlify
						</li>
					</ol>
				</li>

				<li>
					Your rights and additional information about how your data is used
					<ol>
						<li>
							In certain situations, the Administrator has the right to transfer
							your personal data to other recipients, if it is necessary to
							perform a contract concluded with you or to fulfill obligations
							incumbent on the Administrator. This applies to such groups of
							recipients: o a hosting company on a trust basis o authorized
							employees and co-workers who use the data in order to fulfill the
							purpose of the website
						</li>
						<li>
							Your personal data processed by the Administrator for no longer,
							than it is necessary to perform the related activities specified
							by separate regulations (e.g., on the conduct of accounting). With
							regard to marketing data, the data will not will be processed for
							longer than 3 years.
						</li>
						<li>
							You are entitled to request from the Administrator: o access to
							personal data concerning you, o rectification, o erasure, o
							restriction of processing, o and data portability data.
						</li>
						<li>
							You have the right to object in terms of processing indicated in
							3.3 c) against the processing of your data of your personal data
							for the purpose of pursuing legitimate interests carried out by
							the Administrator, including profiling, whereby whereby the right
							to object will not be exercisable in the event of there are valid
							legitimate grounds for processing, overriding your interests,
							rights and freedoms freedoms, in particular to establish, assert
							or defend claims.
						</li>
						<li>
							The actions of the Administrator may be complained about to the
							President of the Office ofProtection of Personal Data, ul. Stawki
							2, 00-193 Warsaw.
						</li>
						<li>
							Provision of personal data is voluntary, but necessary tooperate
							the Service.
						</li>
						<li>
							The following actions may be taken in relation to youon automated
							decision-making, including profiling for the for the purpose of
							providing services under the concluded agreement and for the
							purpose of conducting direct marketing by the Administrator.
						</li>
						<li>
							Personal data is not transferred from third countries within the
							meaning of the Regulations on the protection of personal data.
							This means that we do not transfer them outside the European
							Union.
						</li>
					</ol>
				</li>

				<li>
					Information in forms
					<ol>
						<li>
							The service collects information voluntarily provided by the user,
							including including personal information, if provided.
						</li>
						<li>
							The service can save information about the parameters of the
							connection (time stamp, IP address).
						</li>
						<li>
							The service, in some cases, may record information facilitating
							the association of the data in the form with the e-mail address of
							the of the user filling out the form. In such a case, the e-mail
							address of the user appears inside the url of the page containing
							the form.
						</li>
						<li>
							The data provided in the form is processed for the purpose
							resulting from the function of a specific form, e.g. for the
							purpose of performing the process of handling a service request or
							commercial contact, registration of services, etc. Each time the
							context and description of the form in a clearly informs what it
							is used for.
						</li>
					</ol>
				</li>

				<li>
					Administrator Logs
					<ol>
						<li>
							User behavior information on the site may be subject to logging.
							This data is used for the administration of the service.
						</li>
					</ol>
				</li>

				<li>
					Relevant marketing techniques
					<ol>
						<li>
							The operator uses statistical analysis of website traffic, through
							Google Analytics (Google Inc., based in the USA). The operator
							does not transmits personal data to the operator of this service,
							but only anonymized information. The service is based on the use
							of cookies on the user&apos;s terminal device. In terms of
							information about the user&apos;s preferences collected by the
							Google advertising network, the user can view and edit the
							information resulting from cookies using{' '}
							<a
								href="https://www.google.com/ads/preferences/"
								target="_blank"
								rel="noreferrer"
							>
								the tool
							</a>
						</li>
					</ol>
				</li>

				<li>
					Information about cookies
					<ol>
						<li>The website uses cookies.</li>
						<li>
							Cookies (so-called &quot;cookies&quot;) are computer data, in
							particular. particular text files, which are stored in Service
							User&apos;s terminal equipment and are intended for use of the
							Website&apos;s websites. Cookies usually contain the name of the
							website from which they come, the time stored on the terminal
							equipment and a unique number.
						</li>
						<li>
							The entity placing on the User&apos;s terminal equipment of the
							Website and having access to them is operator of the Website.
						</li>
						<li>
							Cookies are used for the following purposes:
							<ol>
								<li>
									maintaining the session of the user of the Website (after
									logging in), thanks to which a user does not have to enter
									his/her login and password again on each subpage of the
									Service again to enter login and password;
								</li>
								<li>
									To achieve the objectives set out above under &quot;Relevant
									marketing techniques&quot;;
								</li>
							</ol>
						</li>
						<li>
							The Service uses two main types of files cookies:
							&quot;session&quot; (session cookies) and &quot;permanent&quot;
							(persistent cookies). &quot;Session&quot; cookies are temporary
							files, which are stored on the User&apos;s terminal equipment
							until the time of logging out, leaving the website or switching
							off software (web browser). &quot;Permanent&quot; cookies cookies
							are stored on the User&apos;s end device for the the time
							specified in the parameters of the cookies or until they are
							deleted by the User.
						</li>
						<li>
							Web browsing software (browser Internet browser) usually allows
							the storage of cookies on the User&apos;s terminal device. Users
							of the Website may change their settings in this regard. The
							Internet browser makes it possible to delete cookies. It is
							possible also automatic blocking of cookies Detailed information
							on this subject can be found in the help or documentation of your
							web browser.
						</li>
						<li>
							Restrictions on the use of cookies may affect certain
							functionality available on the Website.
						</li>
						<li>
							Cookies placed on the User&apos;s terminal equipment Service may
							also be used by entities cooperating with the operator of the
							Website, in particular this concerns companies: Google (Google
							Inc. headquartered in the USA), Facebook (Facebook Inc. based in
							the USA), Twitter (Twitter Inc. based in the USA).
						</li>
					</ol>
				</li>

				<li>
					Managing cookies - how to give and revoke consent in practice?
					<ol>
						<li>
							If you do not want to receive cookies, you can change your browser
							settings. We stipulate that disabling handling of cookies
							necessary for the processes of authentication, security,
							maintaining user preferences user may make it more difficult, and
							in extreme cases may make it impossible to use the websites
						</li>
						<li>
							To manage your cookie settings, select from the list below the web
							browser you are using and follow the instructions:
							<ul>
								<li>Edge</li>
								<li>Internet Explorer</li>
								<li>Chrome</li>
								<li>Safari</li>
								<li>Firefox</li>
								<li>Opera</li>
							</ul>
							Mobile devices:
							<ul>
								<li>Android</li>
								<li>Safari (iOS)</li>
								<li>Windows Phone</li>
							</ul>
						</li>
					</ol>
				</li>
			</ol>
		</StyledPrivacyContent>
	);
};

export default PrivacyContent;
