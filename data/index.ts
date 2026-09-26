export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Flow Docs",
      des: "This project enables real-time collaborative editing, built using Next.js, TipTap Editor, Liveblocks, and Convex. The application allows multiple users to edit a document simultaneously while ensuring seamless synchronization across devices.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg" , "/next.svg"],
      link: "https://docs-zeta-eight-56.vercel.app",
    },
    {
      id: 2,
      title: "College Connections 🎓💬",
      des: "College Connection is a web application designed to help college students connect with each other. It allows students to create profiles, view others' profiles, and reach out through social media links. Additionally, it provides a centralized space to access and share academic notes for all semesters.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg",],
      link: "https://college-connection.vercel.app",
    },
    {
      id: 3,
      title: "Zentry Landing Page Clone 🎮✨",
      des: "This project is a pixel-perfect clone of the Awwwards-winning landing page of Zentry, a gaming company. Designed to replicate the stunning animations, smooth interactions, and immersive UI/UX, this project showcases high-quality frontend development and web animations.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg" , "/next.svg"],
      link: "https://awwwards-website-phi.vercel.app",
    },
    {
      id: 4,
      title: "VirtuSpace — 2D Metaverse 🌐",
      des: "A real-time 2D metaverse where users explore, interact and collaborate in pixel-art spaces like classrooms, offices and event halls. Includes multiplayer avatars over WebSockets and a drag-and-drop map editor, built as a Turborepo monorepo with Prisma.",
      img: "/p5.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
      link: "https://metaverse-web-orpin.vercel.app",
    },
  ];

  // Every other project, shown in the compact "All projects" grid.
  // Private repos have no `github` link so visitors never hit a 404.
  export const allProjects = [
    {
      title: "Manas AI",
      des: "Sovereign on-premise agentic AI workbench for confidential industrial work. Runs fully offline with local models, live tool-call traces and an audit chain. Built for SIH 2026.",
      tags: ["Python", "Agents", "Local LLMs"],
    },
    {
      title: "Veronica",
      des: "macOS voice assistant with wake word, local speech (faster-whisper + Kokoro) and swappable CLI brains like Claude, Codex and Copilot.",
      tags: ["Python", "Speech", "AI"],
    },
    {
      title: "School ERP Dashboard",
      des: "Full school management dashboard: students, classes, attendance, fees with Razorpay, PDF reports and role-based auth.",
      tags: ["Next.js", "Prisma", "Postgres", "Clerk"],
      live: "https://erp-one-ebon.vercel.app",
    },
    {
      title: "LandGuard AI",
      des: "Industrial land monitoring and compliance system for government officials with GIS tracking, risk assessment and financial oversight.",
      tags: ["React", "Leaflet", "Fastify", "Prisma"],
      github: "https://github.com/Mnkubusb/landguard-ai",
    },
    {
      title: "Campus Share",
      des: "AI-powered peer-to-peer marketplace for college students to buy, sell, trade or give away items within their campus.",
      tags: ["Next.js", "Genkit", "Tailwind"],
      github: "https://github.com/Mnkubusb/Campus-Share",
      live: "https://campus-share-bppy.vercel.app",
    },
    {
      title: "Heal Buddy (Nivaran)",
      des: "AI-powered mental wellness companion with conversational screening, a resource hub and peer support.",
      tags: ["Next.js", "Genkit", "Tailwind"],
      github: "https://github.com/Mnkubusb/Nivaran",
      live: "https://healbuddy-sage.vercel.app",
    },
    {
      title: "Investigator Insights",
      des: "Crypto OSINT investigator dashboard for tracing and analysing on-chain activity.",
      tags: ["Next.js", "Genkit", "TypeScript"],
      live: "https://crypto-osint.vercel.app",
    },
    {
      title: "Ascii Yourself",
      des: "Realtime webcam-to-ASCII art app with snapshots and optional Gemini image analysis.",
      tags: ["React", "Canvas", "Gemini"],
      live: "https://ascii-yourself-omega.vercel.app",
    },
    {
      title: "AI Voice Detection API",
      des: "REST API that detects AI-generated vs human voice across Tamil, English, Hindi, Malayalam and Telugu.",
      tags: ["FastAPI", "PyTorch", "Librosa", "Docker"],
      github: "https://github.com/Mnkubusb/voice-detection-api",
    },
    {
      title: "Kaushalam 2026",
      des: "Official site for GEC Bilaspur's annual tech & cultural fest with 3D visuals, registrations, schedules and gallery.",
      tags: ["Next.js", "Three.js", "Framer Motion", "Firebase"],
      github: "https://github.com/Mnkubusb/kausalam2k26",
      live: "https://kausalam2k26.vercel.app",
    },
  ];

  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael John",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael son",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "John",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Lead Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      name: "GitHub",
      img: "/git.svg",
      link: "https://github.com/Mnkubusb",
    },
    {
      id: 2,
      name: "Instagram",
      img: "/insta.svg",
      link: "https://www.instagram.com/manik_chand_sahu/",
    },
    {
      id: 3,
      name: "LinkedIn",
      img: "/link.svg",
      link: "https://www.linkedin.com/in/manik-chand-sahu/",
    },
  ];