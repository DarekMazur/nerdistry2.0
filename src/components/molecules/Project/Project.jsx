import * as React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useSelector } from 'react-redux';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { StyledTechList } from '../../atoms/TechList/TechList.styles';
import { getDateFormat } from '../../../utils/helpers/getDateFormat';
import { StyledProject } from './Project.styles';
import { ProjectSection } from '../ProjectSection/ProjectSection.styles';
import { StyledButton } from '../../atoms/StyledButton/StyledButton.styles';
import { StyledShowMore } from '../../atoms/ShowMore/ShowMore.styles';
import { Pointer } from '../../atoms/Pointer/Pointer.styles';

const Project = ({ projectData, image, techList, index }) => {
	const isDark = useSelector((state) => state.isDark);
	const [isOpen, setIsOpen] = useState(false);
	const [isMouseOver, setIsMouseOver] = useState(false);
	const formattedDate = (date) => new Date(date);
	const tl = useRef(null);
	const titleRef = useRef(null);
	const imageRef = useRef(null);
	const contentRef = useRef(null);
	const [parHeight, setParHeight] = useState(0);

	const { t } = useTranslation();

	useEffect(() => {
		setParHeight(contentRef.current.offsetHeight);
	}, [techList]);

	useEffect(() => {
		tl.current = gsap.timeline({ paused: true });

		tl.current.to(
			[titleRef.current, imageRef.current.children, contentRef.current],
			{
				x: '-=50vw',
				duration: 0.5,
				stagger: 0.05,
			}
		);
	}, []);

	const handleClick = () => {
		if (isOpen) {
			tl.current.reverse();
		} else {
			tl.current.play();
		}
		setIsOpen(!isOpen);
	};

	const handleMouseEnter = () => {
		setIsMouseOver(true);
	};

	const handleMouseLeave = () => {
		setIsMouseOver(false);
	};

	return (
		<StyledProject>
			<ProjectSection ref={titleRef} $dark={isDark}>
				<h3>{projectData.name}</h3>
			</ProjectSection>
			<ProjectSection
				ref={imageRef}
				$curtain
				$heightRef={parHeight}
				onClick={handleClick}
				$dark={isDark}
			>
				<img src={image} alt={projectData.name} />
				<StyledShowMore>
					{isOpen ? t('project.hideDetails') : t('project.showDetails')}
				</StyledShowMore>
			</ProjectSection>
			<ProjectSection $details ref={contentRef} $dark={isDark}>
				<p>
					<strong>{t('project.createdAt')}</strong>{' '}
					{getDateFormat(formattedDate(projectData.created_at))}
					{projectData.updated_at ? (
						<>
							{' '}
							(<strong>{t('project.updatedAt')} </strong>
							{getDateFormat(formattedDate(projectData.updated_at))})
						</>
					) : null}
				</p>
				<p>{projectData.description}</p>
				<StyledTechList>
					<strong>{t('project.stack')} </strong>
					{techList[index]
						? Object.keys(techList[index]).map((techName) => (
								<span key={techName}>{techName}</span>
						  ))
						: null}
				</StyledTechList>
				{projectData.homepage ? (
					<StyledButton
						as="a"
						href={projectData.homepage}
						target="_blank"
						onMouseOver={handleMouseEnter}
						onMouseLeave={handleMouseLeave}
						$mouesOver={isMouseOver}
					>
						<span>{t('project.checkProject')}</span>
						<span>{t('project.click')}</span>
					</StyledButton>
				) : (
					<i>-- {t('project.workInProgress')} --</i>
				)}
				<Pointer onClick={handleClick}>[{t('project.close')}]</Pointer>
			</ProjectSection>
		</StyledProject>
	);
};

export default Project;

Project.defaultProps = {
	image: null,
	techList: null,
	index: 0,
};

Project.propTypes = {
	projectData: PropTypes.shape({
		name: PropTypes.string,
		created_at: PropTypes.string,
		updated_at: PropTypes.string,
		description: PropTypes.string,
		homepage: PropTypes.string,
	}).isRequired,
	image: PropTypes.string,
	techList: PropTypes.arrayOf(oneOfType([PropTypes.object])),
	index: PropTypes.number,
};
