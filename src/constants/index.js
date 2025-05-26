import {
  UA,
  backend,
  creator,
  cs,
  css,
  git,
  html,
  javascript,
  logo,
  matlab,
  mobile,
  nodejs,
  olympicGamesImage,
  python,
  reactjs,
  rpgGameImage,
  tailwind,
	timecoreImage,
  twitchCloneImage,
  typescript,
  web,
	codeWeaverImage
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
      title: "Fullstack Developer",
      icon: creator,
    },
		{
      title: "Solid Web Development",
      icon: web,
    },
    {
      title: "Focused in Backend Development",
      icon: backend,
    },
   ];
  
  const technologies = [
    {
      name:"Python",
      icon: python
    }
    ,
    {
      name:"C#",
      icon:cs
    },
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
      name: "React JS",
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
      name: "git",
      icon: git,
    },


  ];
const experiences = [
  {
    title: "Software Engineer – Internship",
    company_name: "Huellatina",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Mar 2025 – Present",
    points: [
      "Redesigned and extended the company’s WordPress website with custom HTML, CSS, JavaScript, and PHP.",
      "Integrated MySQL databases and connected CRM and CMS systems through REST APIs.",
      "Improved site performance, SEO, and content management workflows.",
      "Collaborated with design and marketing teams to ensure brand alignment and accessibility."
    ]
  },
  {
    title: "Hackathon Developer – CodeWeaver",
    company_name: "Sword Health Hackathon",
    icon: logo,
    iconBg: "#383E56",
    date: "Mar 2025",
    points: [
      "Co-developed CodeWeaver, a web-based tool to analyze software architecture using React, TypeScript, Python, and OpenAI.",
      "Used static analysis and multi-agent AI to detect design issues and architectural smells in GitHub repositories.",
      "Integrated a conversational assistant for custom architectural planning and design decision-making.",
      "Worked on template generation, agent coordination, and contextual reasoning with RAG techniques."
    ]
  },
  {
    title: "Research Assistant",
    company_name: "University of Aveiro – Physics Department",
    icon: UA,
    iconBg: "#383E56",
    date: "Sep 2023 – Jul 2024",
    points: [
      "Developed a MATLAB interface for simulating and controlling light beams with orbital angular momentum (OAM).",
      "Enabled researchers to test OAM-based communication techniques with real-time feedback.",
      "Enhanced system usability for physics researchers without programming experience."
    ]
  }
];

  const projects = [
  {
    name: "CodeWeaver – Smarter Architecture Tool",
    description:
      "Developed during the Sword Health Hackathon, CodeWeaver is an AI-powered tool to help developers understand and improve software architecture. It analyzes GitHub repositories, detects architectural issues, and offers intelligent design planning via a conversational assistant.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "python", color: "pink-text-gradient" },
      { name: "openai", color: "purple-text-gradient" },
      { name: "architecture", color: "orange-text-gradient" }
    ],
    image: codeWeaverImage,
    source_code_link: "https://github.com/Mohaamedl/CodeWeaver"
  },
  {
    name: "TimeCore – Calendar Manager",
    description:
      "Feature-rich calendar manager with PDF import, event merging, CRUD, and ICS export. Built using Spring Boot, React, MySQL, and Tailwind CSS with a clean layered architecture. Currently integrating AI-based scheduling.",
    tags: [
      { name: "springboot", color: "green-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
      { name: "mysql", color: "pink-text-gradient" },
      { name: "tailwindcss", color: "orange-text-gradient" }
    ],
    image: timecoreImage,
    source_code_link: "https://github.com/Mohaamedl/TimeCore---Backend"
  },
  {
    name: "Twitch Platform Clone",
    description:
      "Twitch-style streaming platform built with Next.js, Tailwind CSS, Prisma, PostgreSQL, and Clerk. Includes live streaming, chat, user auth, following system, and recommendation engine.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "prisma", color: "green-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
      { name: "tailwindcss", color: "orange-text-gradient" }
    ],
    image: twitchCloneImage,
    source_code_link: "https://github.com/Mohaamedl/Twitch_clone"
  },
  {
    name: "RPG Game and Database",
    description:
      "Built an RPG character management system with SQL Server and .NET desktop frontend. Included robust data structure, filters, secure access, and C# integration with PowerShell scripts.",
    tags: [
      { name: "sqlserver", color: "blue-text-gradient" },
      { name: "dotnet", color: "green-text-gradient" },
      { name: "csharp", color: "pink-text-gradient" }
    ],
    image: rpgGameImage,
    source_code_link: "https://github.com/Mohaamedl/DB-project"
  },
  {
    name: "Olympic Games Info",
    description:
      "Academic project showing comprehensive Olympic statistics. Web app built with HTML, CSS, JavaScript, jQuery, and Knockout.js. Designed for responsiveness and API integration.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
      { name: "jquery", color: "purple-text-gradient" }
    ],
    image: olympicGamesImage,
    source_code_link: "https://github.com/Mohaamedl/Projeto_ITW"
  }
];
  const testimonials = [
    {
      testimonial:
        "Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi proin sed libero enim sed.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices tincidunt.",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
      
  
  export { experiences, projects, services, technologies, testimonials };

