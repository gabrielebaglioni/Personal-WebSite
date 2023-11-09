



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
    docker,
    boolean,
    carrent,
    jobit,
    tripguide,
    threejs,
    manpower,
    digital,
    ai,
    ai2,
    blockchain,
    research,
    

} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
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
        title: "React and Angular Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer(.NET)",
        icon: backend,
    },
    {
        title: "Web3 & Blockchain Developer",
        icon: blockchain,
    },
    {
        title: "Ai researcher and visionary",
        icon: ai,
    },
    {
        title: "Service Creator",
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
        name: "reactjs",
        icon: reactjs,
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
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Visionary Full Stack Developer",
        company_name: "Independent",
        icon: web,
        iconBg: "#383E56",
        date: "Start Date - End Date",
        points: [
            "Self-taught expertise in full stack development with a focus on backend technologies like C# .NET, and frontend frameworks like Angular and React.",
            "Continuous learning and application of CSS frameworks and advanced JavaScript frameworks.",
            "Paused university studies to pursue a professional career in software development, leading to a role that aligns with the forefront of technological innovation."
        ],
    },
    {
        title: "Blockchain Ethicist and Developer",
        company_name: "Freelance",
        icon: blockchain,
        iconBg: "#4B5D67",
        date: "Start Date - End Date",
        points: [
            "Explored the ethical dimensions and capabilities of blockchain technology, particularly its application in protecting and certifying digital rights.",
            "Passionate about leveraging blockchain to create transparent and equitable systems for artists and creators."
        ],
    },
    {
        title: "Strategic Technology Advocate",
        company_name: "Current Company",
        icon: digital,
        iconBg: "#E6DEDD",
        date: "Start Date - Present",
        points: [
            "Initiated and championed the adoption of a progressive technological stack, enhancing organizational efficiency and readiness for future IT industry demands.",
            "Recognized internally for steering pivotal technological advancements and fostering an innovation-centric work culture."
        ],
    },
    {
        title: "Impact-Driven Software Developer",
        company_name: "Digital Engineering",
        icon: digital,
        iconBg: "#E6DEDD",
        date: "Start Date - Present",
        points: [
            "As a full stack developer, collaborated on various projects post-training, contributing to high-quality software product development.",
            "Engaged in code reviews and provided constructive feedback, upholding high standards of coding practices."
        ],
    },
    {
        title: "Researcher In Author Rights",
        company_name: "Independent Research",
        icon: research,
        iconBg: "#5E8B7E",
        date: "Start Date - Present",
        points: [
            "Currently developing a scientific paper examining the intersection of AI, blockchain, and copyright systems like SIAE.",
            "Investigating how AI can be programmed to recognize the uniqueness of artistic works, using blockchain for copyright, and understanding the economic system around creative rights."
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };