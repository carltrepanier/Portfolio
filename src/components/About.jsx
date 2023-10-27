/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", index * 0.5, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<img src={icon} alt={title} className="w-16 h-16 object-contain" />

					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()} initial="hidden" whileInView="show">
				<p className={`${styles.sectionSubText}`}>À propos</p>
				<h2 className={`${styles.sectionHeadText}`}>Qui suis-je?</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.5, 1)}
				initial="hidden"
				whileInView="show"
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				Je suis un développeur web compétent avec de l&apos;expérience en
				TypeScript et JavaScript, et une expertise dans des frameworks comme
				Next.js, React, Node.js et Three.js. Je peux aussi faire des sites web
				avec WordPress, Shopify et Sanity. J&apos;apprend rapidement et je
				collabore étroitement avec les clients pour créer des solutions
				efficaces, évolutives et conviviales qui résolvent des problèmes réels.
				Travaillons ensemble pour donner vie à vos idées!
			</motion.p>
		</>
	);
};

export default SectionWrapper(About, "a-propos");
