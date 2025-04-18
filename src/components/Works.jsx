/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { github } from '../assets';
import { projects } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	subdomain_link,
}) => {
	return (
		<motion.div
			initial='hidden'
			whileInView='show'
			variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
		>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[500px]'
			>
				<div className='relative w-full h-[230px]'>
					<img
						src={image}
						alt='Project image'
						className='w-full h-full object-cover rounded-2xl'
					/>

					<div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
						<div
							onClick={() => {
								if (source_code_link) {
									window.open(source_code_link, '_blank');
								}
							}}
							className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
						>
							<img
								src={github}
								alt='source code'
								className='w-1/2 h-1/2 object-contain'
							/>
						</div>
					</div>
				</div>

				<div className='mt-5'>
					<h3
						className={`text-white font-bold text-[24px] ${
							subdomain_link ? 'hover:text-secondary hover:underline' : ''
						}`}
					>
						<a href={subdomain_link} target='_blank' rel='noopener noreferrer'>
							{name}
						</a>
					</h3>
					<p className='mt-2 text-secondary text-[14px]'>{description}</p>
				</div>

				<div className='mt-4 flex flex-wrap gap-2'>
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Works = () => {
	return (
		<>
			<motion.div initial='hidden' whileInView='show' variants={textVariant()}>
				<p className={`${styles.sectionSubText} `}>Portfolio</p>
				<h2 className={`${styles.sectionHeadText}`}>Projets réalisés.</h2>
			</motion.div>

			<div className='w-full flex'>
				<motion.p
					initial='hidden'
					whileInView='show'
					variants={fadeIn('', '', 0.5, 1)}
					className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
				>
					Voici quelques projets qui présentent mes compétences et mon
					expérience à travers des exemples concrets de mon travail. Chaque
					projet est brièvement décrit avec des liens vers les dépôts de code et
					les démonstrations en direct. Cela reflète ma capacité à résoudre des
					problèmes complexes, à travailler avec différentes technologies et à
					gérer efficacement des projets.
				</motion.p>
			</div>

			<div className='mt-20 flex flex-wrap gap-7 justify-center'>
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, 'portfolio');
