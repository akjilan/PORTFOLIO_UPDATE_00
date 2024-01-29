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
  tailwind,
  mongodb,
  git,
  figma,
  meta,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
// import {project01,project02, project03} from "../assets/images/"
import project01 from "/project01.png";
import project02 from "/project02.png";
import project03 from "/project03.png";
import ins from "../assets/images/ins.png"
import projectTracker from "../assets/images/projectTracker.png"
import jobhub from "../assets/images/jobhub.png"


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Designer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "Figma Designer",
    icon: backend,
  },
  {
    title: "Content Editor",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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

];

const experiences = [
  {
    title: "RAIHANUL HOQUE JILANY",
    company_name: "Innovative and deadline-driven front end developer with more than 2 years of experience",
    icon: meta,
    iconBg: "#383E56",
    date: "SUMARY",
    points: [
      "Thakurgaon,Rangpur,Bangladesh",
      "01796730896",
      "jlann.aj@gmail.com",
    ],
    link:'#'
  },
  {
    title: "LEETCODE",
    company_name: "I have currently restart my problem solving schedules with python language which helps me to grow my skills on analytical thinking,creative ideation and collaborative mindset",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "PROBLEM SOLVING",
    points: [
    ],
    link:"https://leetcode.com/rhjilan/",
  },
  {
    title: "Bsc (Engineering) in CSE",
    company_name: "Hajee Mohammad Danesh Science & Technology University, Dinajpur",
    icon: meta,
    iconBg: "#383E56",
    date: "EDUCATION",
    points: [
      "2018 JAN - 2023 (PRESENT)",
      "EXPECTED GRADUATING: 2023 AUGUST"

    ],
    link:'#'
  },
  {
    title: "Web Design and Development",
    company_name: "Learning and Earning Development Project [LEDP]",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "CERTIFICATION",
    points: [

    ],
    link: "http://ledp.ictd.gov.bd/certificate/?regid=242085"
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
    name: "EEE CLUB OF HSTU",
    description:
      "This website was developed for eee club of Hajee Mohammad Danesh Science & Technology University, Dinajpur.The project involved designing and developing a website that could be accessed on multiple devices and screen sizes.",
    tags: [
      {
        name: "REACTJS",
        color: "blue-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "green-text-gradient",
      },
      {
        name: "BOOTSTRAP",
        color: "pink-text-gradient",
      },
    ],
    image: project01,
    // source_code_link: "https://github.com/akjilan/Project-EEECLUBOFHSTU",
    github_code_link:"https://github.com/akjilan/Project-EEECLUBOFHSTU",
    source_link:"https://eeeclubofhstu.org",
  },
  {
    name: "INSTITUTION",
    description:
      "Developed a comprehensive MERN stack-based institution portal enabling dynamic management of online admissions, result publication, notices, and institutional information through an intuitive admin panel. ",
    tags: [
      {
        name: "REACTJS",
        color: "blue-text-gradient",
      },
      {
        name: "MONGODB",
        color: "green-text-gradient",
      },
      {
        name: "EXPRESJS",
        color: "blue-text-gradient",
      },
      {
        name: "NODEJS",
        color: "pink-text-gradient",
      },
    ],
    image: ins,
    // source_code_link: "https://github.com/akjilan/Project-EEECLUBOFHSTU",
    github_code_link:"https://github.com/akjilan/INSTITUTE_PROJECT",
    source_link:"https://institution-client.netlify.app",
  },
  {
    name: "JOBHUB",
    description:
      "JobHub Platform was created to bridge the gap between job seekers and opportunities. This full-stack web application facilitates users in exploring, applying, and tracking job applications. T",
    tags: [
      {
        name: "REACTJS",
        color: "blue-text-gradient",
      },
      {
        name: "TAILWINDCSS",
        color: "green-text-gradient",
      },
      {
        name: "FIREBASE",
        color: "pink-text-gradient",
      },
      {
        name: "EXPRESSJS",
        color: "pink-text-gradient",
      },
    ],
    image: jobhub,
    github_code_link:"https://github.com/akjilan/JOBHUB",
    source_link:"https://jobhub-jilan.web.app/",
  },
  {
    name: "PROJECT TRACKER",
    description:
      "Designed and implemented a robust project tracker system using MERN stack technologies, encompassing features such as real-time project updates, bug-fixing orders, discussions, and task assignments. ",
    tags: [
      {
        name: "REACTJS",
        color: "blue-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "green-text-gradient",
      },
      {
        name: "BOOTSTRAP",
        color: "pink-text-gradient",
      },
    ],
    image: projectTracker,
    github_code_link:"https://github.com/akjilan/PROJECT-MANAGEMENT-24/tree/main/frontend",
    source_link:"https://project-tracker-official.netlify.app",
  },
  {
    name: "Shop E",
    description:
      "An Ecommerce website with products build with  dynamic API  and cart system where users can caluculate all expenses for buying selected products. This project can be accessed on multiple devices ",
    tags: [
      {
        name: "REACTJS",
        color: "blue-text-gradient",
      },
      {
        name: "TAILWINDCSS3",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: project02,
    github_code_link:"https://github.com/akjilan/SHOP-EMA_JOHN",
    source_link: "https://shop-ema-john.netlify.app/",
  },
  {
    name: "FETCHER",
    description:
      "Crafted a dynamic API project using Fetch for streamlined client-server data exchange. Developed efficient endpoints, showcasing strong collaboration and Git proficiency. Demonstrates my skill in creating effective APIs for enhanced application connectivity.",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "green-text-gradient",
      },
      {
        name: "BOOTSTRAP",
        color: "pink-text-gradient",
      },
    ],
    image: project03,
    // source_code_link: "https://github.com/akjilan/Countries-Food_API",
    github_code_link:"https://github.com/akjilan/Countries-Food_API",
    source_link: "https://akjilan.github.io/Countries-Food_API/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
