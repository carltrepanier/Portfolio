import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	nextjs,
	meta,
	starbucks,
	tesla,
	shopify,
	nikeclone,
	conferenceasd,
	threejs,
	liamsanche,
	annickstdenis,
} from "../assets";

export const navLinks = [
	{
		id: "a-propos",
		title: "À propos",
	},
	{
		id: "experience",
		title: "Expérience",
	},
	{
		id: "technologies",
		title: "Technologies",
	},
	{
		id: "portfolio",
		title: "Portfolio",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "Web App Developer",
		icon: mobile,
	},
	{
		title: "Full-Stack Developer",
		icon: backend,
	},
	{
		title: "Content Creator",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "nextjs",
		icon: nextjs,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
];

const experiences = [
	{
		title: "React.js Developer",
		company_name: "Starbucks",
		icon: starbucks,
		iconBg: "#383E56",
		date: "March 2020 - April 2021",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "React Native Developer",
		company_name: "Tesla",
		icon: tesla,
		iconBg: "#E6DEDD",
		date: "Jan 2021 - Feb 2022",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Web Developer",
		company_name: "Shopify",
		icon: shopify,
		iconBg: "#383E56",
		date: "Jan 2022 - Jan 2023",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Full stack Developer",
		company_name: "Meta",
		icon: meta,
		iconBg: "#E6DEDD",
		date: "Jan 2023 - Present",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"Si vous voulez avoir un site web bien fait, je choisirais mon bon ami Carl à chaque fois. Je n'ai jamais rencontré une personne plus méticuleuse et axée sur les détails de ma vie.",
		name: "Liam Sanche",
		designation: "Programmeur-Analyste",
		company: "Hébert Communication",
		image: liamsanche,
	},
	{
		testimonial:
			"Carl est à l'écoute des besoins de son client et cherche à répondre aux demandes de manière professionnelle et créative!",
		name: "Annick St-Denis",
		designation: "Conférencière",
		company: "Conférence ASD",
		image: annickstdenis,
	},
];

const projects = [
	{
		name: "Nike clone",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "React",
				color: "blue-text-gradient",
			},
			{
				name: "Vitejs",
				color: "green-text-gradient",
			},
			{
				name: "Tailwind CSS",
				color: "pink-text-gradient",
			},
		],
		image: nikeclone,
		source_code_link: "https://github.com/carltrepanier/Nike_clone",
	},
	{
		name: "Conférence ASD",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "ASP.NET MVC",
				color: "blue-text-gradient",
			},
			{
				name: "SQL",
				color: "green-text-gradient",
			},
			{
				name: "CSS",
				color: "pink-text-gradient",
			},
		],
		image: conferenceasd,
		source_code_link: "",
	},
];

export { services, technologies, experiences, testimonials, projects };
