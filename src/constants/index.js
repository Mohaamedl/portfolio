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
  twitchCloneImage,
  typescript,
  web
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
      title: "Desktop app Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Fullstack Developer",
      icon: creator,
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
      name:"Matlab",
      icon:matlab
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
      title: "Web Developer",
      company_name: "University of Aveiro",
      icon: UA,
      iconBg: "#383E56",
      date: "Sep 2022 - Jan 2023",
      points: [
        "Actively participated in the development of a website providing detailed information and statistics about all Olympic Games.",
        "Managed the graphical structure of the site using HTML and CSS, ensuring an intuitive and visually appealing interface.",
        "Implemented site responsiveness using JavaScript, ensuring a consistent user experience across various devices.",
        "Collaborated on integrating the site with a provided API, utilizing jQuery and Knockout.js for seamless data communication and management.",
        "Played a key role in gathering requirements for the API, ensuring that developed functionalities met project specifications.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "University of Aveiro",
      icon: UA,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Jan 2024",
      points: [
        "Led the development of a SQL Server database and a .NET desktop application for an RPG game, from requirements gathering to data normalization, indexing, and schema design.",
        "Implemented robust database queries and ensured database security measures, including user permissions and data encryption.",
        "Designed and implemented the graphical interface of the application to ensure user-friendly navigation and interaction.",
        "Established seamless connectivity between the application and the SQL Server database using PowerShell scripts for efficient data retrieval and manipulation.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "ME",
      icon: logo,
      iconBg: "#383E56",
      date: "Jun 2024 - Jul 2024",
      points: [
        "Developed a Twitch platform clone using Next.js as the foundational framework, Prisma and PostgreSQL for data storage, and styled with Tailwind CSS for aesthetic consistency.",
        "Implemented user functionalities including user registration, live streaming, and following other users, enhancing user engagement and interaction.",
        "Designed and developed a recommendation system to suggest content based on user preferences, improving user retention and satisfaction.",
        "Ensured scalability and performance optimization of the application to handle concurrent user interactions and streaming sessions effectively.",
      ],
    },
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
  
  const projects = [
    {
      name: "Olympic Games Info",
      description:
        "Website providing detailed information and statistics about all Olympic Games, managed with HTML and CSS, implemented responsiveness with JavaScript, integrated API using jQuery and Knockout.js.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
          name: "jquery",
          color: "purple-text-gradient",
        },
        
      ],
      image: olympicGamesImage,
      source_code_link: "https://github.com/",
    },
    {
      name: "RPG Game And Database",
      description:
        "Developed SQL Server database and .NET desktop application for an RPG game, included data normalization, robust queries, security measures, and C# integration for database connectivity.",
      tags: [
        {
          name: "sqlserver",
          color: "blue-text-gradient",
        },
        {
          name: "dotnet",
          color: "green-text-gradient",
        },
        {
          name: "csharp",
          color: "pink-text-gradient",
        },
      ],
      image: rpgGameImage,
      source_code_link: "https://github.com/",
    },
    {
      name: "Twitch Platform Clone",
      description:
        "Developed Twitch platform clone using Next.js, Prisma, PostgreSQL for data storage, and styled with Tailwind CSS, implemented user registration, live streaming, and recommendation system.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "prisma",
          color: "green-text-gradient",
        },
        {
          name: "postgresql",
          color: "pink-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "orange-text-gradient",
        },
      ],
      image: twitchCloneImage,
      source_code_link: "https://github.com/",
    },
  ];
  
  
  export { experiences, projects, services, technologies, testimonials };

