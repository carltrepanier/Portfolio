/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Tech = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText}`}>Technologies</p>
				<h2 className={`${styles.sectionHeadText}`}>
					Tech les plus utilisées.
				</h2>
			</motion.div>

			<motion.div
				variants={fadeIn("", "", 0.5, 1)}
				className="flex flex-row flex-wrap justify-center gap-10 mt-10"
			>
				{technologies.map((technology) => (
					<div className="w-28 h-28" key={technology.name}>
						<BallCanvas icon={technology.icon} />
					</div>
				))}
			</motion.div>
		</>
	);
};

export default SectionWrapper(Tech, "technologies");
