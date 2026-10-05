const INFO = {
	main: {
		title: "Alexander Coronel — Software Engineer",
		name: "Alexander Coronel",
		email: "alexcoronel1995@gmail.com",
		logo: process.env.PUBLIC_URL + "/logo.png",
	},

	socials: {
		github: "https://github.com/alexc957",
		linkedin: "https://www.linkedin.com/in/acoronel95/",
	},

	homepage: {
		title: "Software Engineer — Backend, Data & AI Integration.",
		description:
			"Software engineer with 6+ years of experience building and optimizing production systems for clients such as McKinsey & Company and Twilio. Specialized in PostgreSQL design and performance tuning, ETL pipelines, large-scale content and data migrations, and integrating LLMs into real products. Cut critical query times from ~10s to under 1s, led a Haskell-based survey platform, and work daily with agentic development workflows using Claude.",
	},

	about: {
		title: "I’m Alexander Coronel. I live in Quito, Ecuador.",
		description:
			"I’m a software engineer with 6+ years of experience building and optimizing production systems for clients such as McKinsey & Company and Twilio. I specialize in PostgreSQL design and performance tuning, ETL pipelines, large-scale content and data migrations, and integrating LLMs into real products. I enjoy owning architecture decisions, collaborating directly with stakeholders, and mentoring other developers.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	contact: {
		email: "alexcoronel1995@gmail.com",
		phone: "+593 98 269 7669",
		location: "Quito, Ecuador",
	},

	experience: [
		{
			role: "Software Developer",
			company: "Stack Builders S.A.",
			location: "Quito, Ecuador",
			duration: "07/2022 - Current",
			projects: [
				{
					name: "Survey Platform — Backend, Data & AI Systems",
					stack: "Haskell, PostgreSQL, Go",
					points: [
						"Led development of a large-scale Haskell survey platform for several months, owning architecture, technical decisions, implementation and stakeholder communication.",
						"Cut critical production query times from ~10s to under 1s by redesigning PostgreSQL schemas (new tables, views, targeted indexes) and tuning multi-table joins with EXPLAIN ANALYZE.",
						"Resolved production concurrency issues with PostgreSQL locking (FOR UPDATE), preventing competing processes from waiting needlessly on shared resources.",
						"Built a Go archival system, scheduled with systemd, that moved data older than 2 years (nearly 40% of stored data, unused by reports and application logic) to compressed archives in Amazon S3 and purged it from the operational database, improving database performance.",
						"Designed an OpenAI-based proof of concept for survey fraud detection that evaluates whether responses are contextually relevant to each question, with a Hugging Face model as fallback.",
					],
				},
				{
					name: "McKinsey & Company — Data Engineering & Analytics",
					stack: "Microsoft Fabric",
					points: [
						"Consolidated 9 KNIME workflows into 2 ETL pipelines in Microsoft Fabric (a ~78% reduction), simplifying the data-processing architecture.",
						"Designed a historical data model that replaced Excel-based data management and enabled scalable analytics and reporting in Tableau.",
						"Created AI agent skills that help data analysts understand the data model and build reports faster.",
						"Partnered directly with infrastructure owners and stakeholders to design and deliver the new processing and reporting architecture; contributed to a supplier diversity and inclusivity reporting platform.",
					],
				},
				{
					name: "Twilio — Documentation & Web Platform",
					stack: "Node.js, Django/Wagtail, AEM",
					points: [
						"Built a Node.js CLI that migrated ~600 pages (about 40% of a large documentation repository) from Wagtail and PostgreSQL to MDX, converting HTML, Markdown, code blocks and nested blocks while preserving page structure for a Docs-as-Code architecture.",
						"Developed features and reusable components on a large Django/Wagtail documentation platform, and built CLI tooling to move existing content to new page components.",
						"Improved multilingual content management by integrating and extending Wagtail Localize to fix gaps in the existing internationalization workflow.",
						"Maintained and extended Java components on Adobe Experience Manager (AEM) powering public product, pricing and blog content, resolving production issues.",
					],
				},
				{
					name: "AI-First Development Initiative",
					stack: "Claude",
					points: [
						"Took part in an internal agentic development initiative using Claude, working with contracts and Architectural Decision Records that define agent capabilities, limits, validation requirements and workflows.",
						"Contributed to automated ticket creation, code review and adversarial validation, where multiple agents independently evaluate each change.",
						"Conducted code reviews and mentored developers and interns across projects.",
					],
				},
			],
		},

		{
			role: "Software Developer",
			company: "Iqbit",
			location: "Quito, Ecuador",
			duration: "08/2021 - 06/2022",
			points: [
				"Built a full-stack debt tracking system, covering application development, backend services and data management.",
				"Developed and maintained a React Native radio app with real-time audio streaming.",
				"Automated recurring processes with Google Cloud Scheduler and Cron jobs, reducing manual processing by ~20%.",
			],
		},

		{
			role: "Junior Web Developer",
			company: "Mosflor SA",
			location: "Quito, Ecuador",
			duration: "05/2019 - 11/2019",
			points: [
				"Developed an e-commerce prototype with Angular and Flask for user testing and product feedback.",
				"Designed database schemas and technical documentation to improve developer onboarding.",
			],
		},
	],

	education: [
		{
			degree: "B.Eng. in Informatics and Computer Systems Engineering",
			institution: "Escuela Politécnica Nacional",
			location: "Quito, Ecuador",
			duration: "Class of 2020",
		},
	],

	skills: [
		{
			category: "Languages",
			items: ["TypeScript", "JavaScript", "Python", "Go", "Haskell", "Java"],
		},
		{
			category: "Backend & Frontend",
			items: [
				"Node.js",
				"NestJS",
				"Express.js",
				"Django",
				"Flask",
				"React",
				"React Native",
				"Angular",
			],
		},
		{
			category: "Data & Cloud",
			items: [
				"PostgreSQL",
				"MongoDB",
				"MySQL",
				"Microsoft Fabric",
				"ETL",
				"AWS (S3, RDS)",
				"systemd",
				"Cron",
				"Google Cloud Scheduler",
			],
		},
		{
			category: "AI & Tooling",
			items: [
				"OpenAI API",
				"Hugging Face",
				"Claude",
				"GitHub Copilot",
				"agentic development workflows",
			],
		},
	],
};

export default INFO;
