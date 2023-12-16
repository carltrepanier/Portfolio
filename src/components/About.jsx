/* eslint-disable react-refresh/only-export-components */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

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
				avec WordPress et Sanity (un CMS pour Next.js). J&apos;apprend
				rapidement et je collabore étroitement avec les clients pour créer des
				solutions efficaces, évolutives et conviviales qui résolvent des
				problèmes réels. Travaillons ensemble pour donner vie à vos idées!
			</motion.p>
		</>
	);
};

export default SectionWrapper(About, "a-propos");
