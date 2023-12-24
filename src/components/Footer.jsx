import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

export default function Footer() {
	return (
		<footer className='flex'>
			<motion.p
				variants={fadeIn('', '', 0.2, 1)}
				initial='hidden'
				whileInView='show'
				className='mb-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center'
			>
				&copy; {new Date().getFullYear()} Conception CT - Tous droits réservés
			</motion.p>
		</footer>
	);
}
