import {
  weather,
  discord,
  hoobank,
  hcl,
  dci,
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
  docker,
  threejs,
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
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
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
    title: "IT Support",
    company_name: "HCL Technologies Germany GmbH",
    icon: hcl,
    iconBg: "#E6DEDD",
    date: "Nov 2019 - Feb 2022",
    points: [
      "Provide technical assistance and support to end-users for software, hardware, and network issues.",
      "Troubleshoot and resolve technical problems through phone, email, or in-person communication.",
      "Install and configure software, printers, and other hardware components to ensure smooth operation.",
      "Maintain accurate records of issues and resolutions, and update documentation to help end-users solve common problems themselves.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Digital Career Institute",
    icon: dci,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - present",
    points: [
      "Develop and maintain both client-side (front-end) and server-side (back-end) code for web applications.",
      "Create and integrate APIs to connect different software systems and databases.",
      "Ensure the application is secure, scalable and performs optimally through testing, optimization, and debugging.",
      "Collaborate with designers, project managers, and other developers to create a functional and visually appealing web application that meets the needs of the end-user",
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
    name: "Discord Clone",
    description:
      "This Discord clone built with React and Firebase offers real-time chat, customizable text channels and servers, and secure registration and login. It's an intuitive and seamless communication platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: discord,
    source_code_link: "https://github.com/MarcelVoigt92/discord-clone",
  },
  {
    name: "Hoobank",
    description:
      "Welcome to Hoobank, the one-stop-shop for all your banking needs! Our mission is to provide our customers with a seamless and hassle-free banking experience, no matter where they are in the world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "postcss",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    source_code_link: "https://github.com/MarcelVoigt92/project_Hoobank",
  },
  {
    name: "Weather App",
    description:
      "Introducing our brand new weather app built with React and powered by the OpenWeather API! With our app, you can easily check the weather conditions and forecast for any location in the wor",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "open weather API",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/MarcelVoigt92/React-Weather-App",
  },
];

export { services, technologies, experiences, testimonials, projects };
