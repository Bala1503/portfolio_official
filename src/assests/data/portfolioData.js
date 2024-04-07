import portfolioImg11 from "../images/portfolio-11.jpg";
import portfolioImg08 from "../images/portfolio-08.jpg"
import portfolioImg09 from "../images/portfolio-09.jpg"
import portfolioImg10 from "../images/portfolio-10.jpg"

const portfolios = [
  {
    id: "07",
    imgUrl: portfolioImg08,
    category: "Web Design",
    title: "Appointment Booking Website",
    description:
      "\"HealHub\" is a doctor appointment booking system. This GitHub repository contains the source code and documentation for the application. Collaborate, contribute, and improve the scheduling process for patients and healthcare providers.",
    technologies: ["React", "Tailwind css", "Node.js", "MongoDB","Express.js","Stripe"],
    siteUrl: "https://healhub7.netlify.app",
  },
  {
    id: "08",
    imgUrl: portfolioImg09,
    category: "Web Design",
    title: "Portfolio Website",
    description:
      "Dynamic and visually appealing personal portfolio website to showcase your skills, projects, and experience. The website will serve as a digital resume and a platform to demonstrate your expertise to potential employers, clients, or collaborators.",
    technologies: ["React", "Tailwind css"],
    siteUrl: "https://bala1503.github.io/portfolio/",
  },
  {
    id: "09",
    imgUrl: portfolioImg10,
    category: "Ux",
    title: "Attendance Mailing System",
    description:
      "This project is build on JSP, HTML, CSS, and Javascript integrated with a MySQL database (localhost) on NetBeans, simplifies attendance tracking. Staff can easily manage subjects and students, while the system streamlines emailing precise attendance data (using javax mail) to designated addresses, enhancing administrative efficiency",
    technologies: ["HTML","CSS","JSP", "MYSQL", "JS"],
    siteUrl: "https://github.com/Bala1503/Attendance-Mailing-System",
  },
  {
    id: "10",
    imgUrl: portfolioImg11,
    category: "Ux",
    title: "All About Cinema",
    description:
      "This project is a comprehensive movie recommendation and favourites management system. Leveraging HTML, CSS, JavaScript, JSP, and MySQL, this application provides users with personalized movie recommendations based on their preferences and allows them to maintain a curated list of favourite movies",
    technologies: ["HTML", "CSS", "JSP","MYSQL", "JS"],
    siteUrl: "https://github.com/Bala1503/All-about-cinema",
  },
];

export default portfolios;
