import {
	mobile,
	backend,
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
	hebertcom,
	bev,
	adssys,
	metaversusclone,
	nikeclone,
	ecommerce,
	conferenceasd,
	threejs,
	liamsanche,
	annickstdenis,
	gentremblay,
	emmanuellecote,
} from '../assets';

export const navLinks = [
	{
		id: 'a-propos',
		title: 'À propos',
	},
	{
		id: 'experience',
		title: 'Expérience',
	},
	{
		id: 'technologies',
		title: 'Technologies',
	},
	{
		id: 'portfolio',
		title: 'Portfolio',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Développement de sites web',
		icon: web,
	},
	{
		title: "Développement d'applications web",
		icon: web,
	},
	{
		title: "Développement d'applications mobiles",
		icon: mobile,
	},
	{
		title: 'Développement full-stack',
		icon: backend,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'nextjs',
		icon: nextjs,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Three JS',
		icon: threejs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'git',
		icon: git,
	},
	{
		name: 'figma',
		icon: figma,
	},
];

const experiences = [
	{
		title: 'Développeur web pigiste',
		company_name: 'Adssys',
		icon: adssys,
		iconBg: '#383E56',
		date: "Décembre 2023 à aujourd'hui",
		points: [
			'Apporter mon expertise dans certains mandats comme développeur pigiste.',
			"Développement et maintenance de sites web en utilisant WordPress et d'autres technologies connexes.",
			"Collaboration avec d'autres développeurs pour créer des produits de haute qualité.",
			'Mise en œuvre de la conception responsive et garantie de la compatibilité entre les navigateurs.',
		],
	},
	{
		title: 'Développeur web pigiste',
		company_name: 'Bonheur en vrac',
		icon: bev,
		iconBg: '#383E56',
		date: "Novembre 2023 à aujourd'hui",
		points: [
			'Apporter mon expertise dans certains mandats comme développeur pigiste.',
			"Développement et maintenance de sites web en utilisant WordPress et d'autres technologies connexes.",
			"Collaboration avec d'autres développeurs pour créer des produits de haute qualité.",
			'Mise en œuvre de la conception responsive et garantie de la compatibilité entre les navigateurs.',
		],
	},
	{
		title: 'Développeur web pigiste',
		company_name: 'Hébert Communication',
		icon: hebertcom,
		iconBg: '#383E56',
		date: "Juin 2023 à aujourd'hui",
		points: [
			'Apporter mon expertise dans certains mandats comme développeur pigiste.',
			"Développement et maintenance de sites web en utilisant WordPress et d'autres technologies connexes.",
			"Collaboration avec d'autres développeurs pour créer des produits de haute qualité.",
			'Mise en œuvre de la conception responsive et garantie de la compatibilité entre les navigateurs.',
		],
	},
];

const testimonials = [
	{
		testimonial:
			"Ma première collaboration avec Carl fut très positive! J'avais besoin de lui pour faire des modifications dans un site web désuet et il a traité ma demande avec grand professionnalisme. Je l'ai trouvé très à l'écoute de mes besoins, il m'a fait de bonnes suggestions, il était très efficace et fiable, ses indications étaient claires et il savait bien vulgariser les choses. Carl est définitivement une personne de confiance à qui vous pouvez confier vos mandats web! ",
		name: 'Emmanuelle Côté',
		designation: 'Gestionnaire de projets',
		company: 'Erod agence créative',
		image: emmanuellecote,
	},
	{
		testimonial:
			'Carl est un excellent collaborateur de notre équipe : Il est compétent, évidemment! Mais plus important encore, il est bien organisé, proactif et a une excellente attitude constructive face aux défis du développement web.',
		name: 'Geneviève Tremblay',
		designation: 'Stratège numérique',
		company: 'Bonheur en vrac',
		image: gentremblay,
	},
	{
		testimonial:
			"Si vous voulez avoir un site web bien fait, je choisirais mon bon ami Carl à chaque fois. Je n'ai jamais rencontré une personne plus méticuleuse et axée sur les détails de ma vie.",
		name: 'Liam Sanche',
		designation: 'Programmeur-Analyste',
		company: 'Hébert Communication',
		image: liamsanche,
	},
	{
		testimonial:
			"Carl est à l'écoute des besoins de son client et cherche à répondre aux demandes de manière professionnelle et créative!",
		name: 'Annick St-Denis',
		designation: 'Conférencière',
		company: 'Conférence ASD',
		image: annickstdenis,
	},
];

const projects = [
	{
		name: 'Boutique en ligne',
		description:
			"Pour démontrer mes compétences en développement web et design, j'ai réalisé une boutique en ligne en utilisant Next.js, Stripe, TypeScript et SCSS et le CMS Payload. Ce projet est éducatif et sert à montrer mes compétences techniques.",
		tags: [
			{
				name: 'Next.js',
				color: 'blue-text-gradient',
			},
			{
				name: 'Payload CMS',
				color: 'green-text-gradient',
			},
			{
				name: 'SCSS',
				color: 'pink-text-gradient',
			},
		],
		image: ecommerce,
		source_code_link: 'https://github.com/carltrepanier/e-commerce',
		subdomain_link: 'https://e-commerce-ct.payloadcms.app/',
	},
	{
		name: 'Nike clone',
		description:
			"Pour démontrer mes compétences en développement web et design, j'ai réalisé un clone du site Nike en utilisant Vite.js, React.js, JavaScript et Tailwind CSS. Ce projet est éducatif, non affilié à Nike, et sert à montrer mes compétences techniques.",
		tags: [
			{
				name: 'React.js',
				color: 'blue-text-gradient',
			},
			{
				name: 'Vite.js',
				color: 'blue-text-gradient',
			},
			{
				name: 'Tailwind CSS',
				color: 'pink-text-gradient',
			},
		],
		image: nikeclone,
		source_code_link: 'https://github.com/carltrepanier/Nike_clone',
		subdomain_link: 'https://nikeclone.carltrepanier.net/',
	},
	{
		name: 'Metaversus clone',
		description:
			"Pour démontrer mes compétences en développement web et design, j'ai réalisé un clone du site Metaversus en utilisant Next.js, React.js, JavaScript et Tailwind CSS. Ce projet est éducatif, non affilié à Metaversus, et sert à montrer mes compétences techniques.",
		tags: [
			{
				name: 'Next.js',
				color: 'blue-text-gradient',
			},
			{
				name: 'React.js',
				color: 'blue-text-gradient',
			},
			{
				name: 'Tailwind CSS',
				color: 'pink-text-gradient',
			},
		],
		image: metaversusclone,
		source_code_link: 'https://github.com/carltrepanier/Metaversus_clone',
		subdomain_link: 'https://metaversusclone.carltrepanier.net/',
	},
	{
		name: 'Conférence ASD',
		description:
			"Application web fait dans le cadre d'un projet scolaire. Cette application permet de gérer les conférences d'une entreprise. Elle permet de gérer les conférenciers, les conférences, les clients et les réservations.",
		tags: [
			{
				name: 'ASP.NET MVC',
				color: 'blue-text-gradient',
			},
			{
				name: 'SQL',
				color: 'green-text-gradient',
			},
			{
				name: 'CSS',
				color: 'pink-text-gradient',
			},
		],
		image: conferenceasd,
		source_code_link: '',
	},
];

export { services, technologies, experiences, testimonials, projects };
