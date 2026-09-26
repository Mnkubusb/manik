import type { FolderItem } from "@/types/location";
const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Articles", // was "Safari"
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

type BlogPost = {
    id: number;
    date: string;
    title: string;
    image: string;
    link: string;
};

// Add posts here as { id, date, title, image, link }.
const blogPosts: BlogPost[] = [];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "TypeScript"],
    },
    {
        category: "Mobile",
        items: ["React Native", "Expo"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "NestJS", "Hono"],
    },
    {
        category: "Database",
        items: ["MongoDB", "PostgreSQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/Mnkubusb",
    },
    {
        id: 2,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/manik-chand-sahu/",
    },
    {
        id: 3,
        text: "Instagram",
        icon: "/icons/instagram.svg",
        bg: "#e4405f",
        link: "https://www.instagram.com/manik_chand_sahu/",
    },
    {
        id: 4,
        text: "Email",
        icon: "/icons/mail.svg",
        bg: "#4bcb63",
        link: "mailto:manikmnr315@gmail.com",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.png",
    },
    {
        id: 2,
        img: "/images/gal2.png",
    },
    {
        id: 3,
        img: "/images/gal3.png",
    },
    {
        id: 4,
        img: "/images/gal4.png",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
};

type Project = {
    name: string;
    slug: string;
    description: string[];
    live?: string;
    github?: string;
    image?: string;
};

// Private repos have no `github` link so visitors never hit a 404.
const PROJECTS: Project[] = [
    {
        name: "Flow Docs",
        slug: "flow-docs",
        description: [
            "Real-time collaborative document editor where multiple people edit the same doc at once, synced across devices.",
            "Built with Next.js, TipTap, Liveblocks and Convex.",
        ],
        live: "https://docs-zeta-eight-56.vercel.app",
        github: "https://github.com/Mnkubusb/docs",
        image: "/images/project-flow-docs.svg",
    },
    {
        name: "College Connections",
        slug: "college-connections",
        description: [
            "Helps college students find and connect with each other through profiles and social links.",
            "Also a shared space for academic notes across every semester. Built with Next.js, Prisma and Tailwind.",
        ],
        live: "https://college-connection.vercel.app",
        github: "https://github.com/Mnkubusb/college_connection",
        image: "/images/project-college-connections.svg",
    },
    {
        name: "Zentry Clone",
        slug: "zentry-clone",
        description: [
            "Pixel-perfect clone of the Awwwards-winning Zentry gaming landing page.",
            "Recreates its scroll animations and immersive UI with React, GSAP and Tailwind.",
        ],
        live: "https://awwwards-website-phi.vercel.app",
        github: "https://github.com/Mnkubusb/awwwards_website",
        image: "/images/project-zentry.svg",
    },
    {
        name: "VirtuSpace",
        slug: "virtuspace",
        description: [
            "Real-time 2D metaverse: walk, sit and chat in pixel-art offices, classrooms and event halls.",
            "Multiplayer avatars over WebSockets plus a drag-and-drop map editor, in a Turborepo monorepo with Prisma.",
        ],
        live: "https://metaverse-web-orpin.vercel.app",
        github: "https://github.com/Mnkubusb/metaverse",
        image: "/images/project-virtuspace.png",
    },
    {
        name: "Manas AI",
        slug: "manas-ai",
        description: [
            "Sovereign on-premise agentic AI workbench for confidential industrial work, built for SIH 2026.",
            "Runs fully offline on local models with live tool-call traces and a tamper-evident audit chain.",
        ],
    },
    {
        name: "Veronica",
        slug: "veronica",
        description: [
            "macOS voice assistant with a custom wake word and fully local speech (faster-whisper + Kokoro).",
            "Swappable brains: Claude, Codex, Copilot and more through their own CLIs.",
        ],
    },
    {
        name: "School ERP",
        slug: "school-erp",
        description: [
            "School management dashboard covering students, classes, attendance, fees and PDF reports.",
            "Next.js, Prisma, Postgres, Clerk auth and Razorpay payments.",
        ],
        live: "https://erp-one-ebon.vercel.app",
    },
    {
        name: "LandGuard AI",
        slug: "landguard-ai",
        description: [
            "Industrial land monitoring and compliance system for government officials.",
            "GIS tracking, risk assessment and financial oversight. React + Leaflet frontend, Fastify + Prisma backend.",
        ],
        github: "https://github.com/Mnkubusb/landguard-ai",
    },
    {
        name: "Campus Share",
        slug: "campus-share",
        description: [
            "AI-powered peer-to-peer marketplace for students to buy, sell, trade or give away items on campus.",
            "Next.js, Genkit and Tailwind.",
        ],
        live: "https://campus-share-bppy.vercel.app",
        github: "https://github.com/Mnkubusb/Campus-Share",
    },
    {
        name: "Heal Buddy",
        slug: "heal-buddy",
        description: [
            "AI-powered mental wellness companion with conversational screening, a resource hub and peer support.",
        ],
        live: "https://healbuddy-sage.vercel.app",
        github: "https://github.com/Mnkubusb/Nivaran",
    },
    {
        name: "Investigator Insights",
        slug: "investigator-insights",
        description: [
            "Crypto OSINT investigator dashboard for tracing and analysing on-chain activity.",
        ],
        live: "https://crypto-osint.vercel.app",
    },
    {
        name: "Ascii Yourself",
        slug: "ascii-yourself",
        description: [
            "Realtime webcam-to-ASCII art with snapshots and optional Gemini image analysis.",
        ],
        live: "https://ascii-yourself-omega.vercel.app",
    },
    {
        name: "AI Voice Detection API",
        slug: "voice-detection-api",
        description: [
            "REST API that detects AI-generated vs human voice in Tamil, English, Hindi, Malayalam and Telugu.",
            "FastAPI, PyTorch and Librosa, shipped with Docker.",
        ],
        github: "https://github.com/Mnkubusb/voice-detection-api",
    },
    {
        name: "Kaushalam 2026",
        slug: "kaushalam-2026",
        description: [
            "Official site for GEC Bilaspur's annual tech & cultural fest: events, registrations, schedule and gallery.",
            "Next.js, Three.js, Framer Motion and Firebase.",
        ],
        live: "https://kausalam2k26.vercel.app",
        github: "https://github.com/Mnkubusb/kausalam2k26",
    },
    {
        name: "Cloud Jam Leaderboard",
        slug: "cloud-jam",
        description: [
            "Leaderboard tracking Google Cloud Study Jams participants, skill badges and arcade completions.",
            "Next.js on Cloud Run with data from Cloud Storage.",
        ],
        live: "https://googlecloudjamleaderboard.vercel.app",
        github: "https://github.com/Mnkubusb/cloud-jam",
    },
];

// Where each file sits inside an open project folder, in order.
const FILE_POSITIONS = ["top-10 left-5", "top-10 right-10", "top-52 left-5", "top-52 right-10"];

const projectFolder = (project: Project, index: number): FolderItem => {
    const files = [
        {
            name: `${project.name}.txt`,
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            image: project.image,
            description: project.description,
        },
        project.live && {
            name: `${project.slug}.live`,
            icon: "/images/safari.png",
            kind: "file",
            fileType: "url",
            href: project.live,
        },
        project.github && {
            name: "GitHub",
            icon: "/icons/github-dark.svg",
            kind: "file",
            fileType: "url",
            href: project.github,
        },
        project.image && {
            name: `${project.slug}.${project.image.split(".").pop()}`,
            icon: "/images/photos.png",
            kind: "file",
            fileType: "img",
            imageUrl: project.image,
        },
    ].filter((file) => !!file);

    return {
        // Location ids 1-4 are taken by the sidebar favorites.
        id: index + 5,
        name: project.name,
        icon: "/images/folder.png",
        kind: "folder",
        children: files.map((file, i) => ({ id: i + 1, position: FILE_POSITIONS[i], ...file })),
    };
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: PROJECTS.map(projectFolder),
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.jpg",
            icon: "/images/photos.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/manik.jpg",
        },
        {
            id: 2,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-10 left-60",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/manik.jpg",
            description: [
                "Hey! I'm Manik Chand Sahu 👋, a full stack web and app developer from Bilaspur, Chhattisgarh, currently working as an SDE 1 at Rival.io.",
                "I build with Next.js, React, TypeScript and Node, and lately a lot of AI: agents, local LLMs and voice assistants.",
                "I love shipping things people actually use, from real-time collaborative apps to hackathon and college fest websites.",
                "Outside of code you'll find me watching anime, listening to music or gaming.",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };