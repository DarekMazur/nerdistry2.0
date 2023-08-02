import * as React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useSelector } from 'react-redux';
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
					{isOpen ? 'Hide details' : 'Show details'}
				</StyledShowMore>
			</ProjectSection>
			<ProjectSection $details ref={contentRef} $dark={isDark}>
				<p>
					<strong>Created at:</strong>{' '}
					{getDateFormat(formattedDate(projectData.created_at))} (
					<strong>last update:</strong>{' '}
					{getDateFormat(formattedDate(projectData.updated_at))})
				</p>
				<p>{projectData.description}</p>
				<StyledTechList>
					<strong>Stack: </strong>
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
						<span>See project</span>
						<span>Click!</span>
					</StyledButton>
				) : (
					<i>-- work in progress --</i>
				)}
				<Pointer onClick={handleClick}>[click to close]</Pointer>
			</ProjectSection>
		</StyledProject>
	);
};

export default Project;

Project.defaultProps = {
	image: null,
	techList: null,
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
	index: PropTypes.number.isRequired,
};
