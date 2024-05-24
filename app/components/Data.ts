export interface ProjectProps {
    title: string;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  link: string;
}

export const data: ProjectProps[] = [
  {
    title: "Web Application",
    name: "Pongy",
    description:
      "Collaborative web development project creating a real-time multiplayer Pong game. Utilizes NestJS backend, nextJS frontend, PostgreSQL database, and OAuth authentication. Key features include secure login, live chat, and multiplayer gaming in a responsive, single-page app. Emphasizes security, usability, and Docker-based deployment for seamless integration.",
    technologies: [
      "TypeScript",
      "NextJs",
      "NestJs",
      "PostgresSQL",
      "Docker",
      "OAuth",
    ],
    image: "./pongy.png",
    github: "",
    link: "",
  },
  {
    title: "System Administration",
    name: "inception",
    description:
      "Designed a Docker-based service for hosting a WordPress website. Created a multi- container setup with MariaDB for the database, WordPress for the website, and Nginx as the web server. The project demonstrated the ability to create scalable, containerized applications",
    technologies: [
        "Wordpress",
        "MariaDB",
        "Nginx",
        "Hugo",
        "Adminer",
        "Redis",
        "Docker",
        "VertualBox",
        ],
    image: "./Docker.png",
    github: "",
    link: "",
  },
  {
    title: "Http Server",
    name: "Web Server",
    description:
      "Created a non-blocking HTTP server in C++98, meeting strict functionality and coding standards. Implemented support for HTTP methods (GET, POST, DELETE), serving static websites, file uploads, and configuration management via a file. Ensured responsiveness under heavy loads and multi-port listening. Emphasized thorough testing and compliance with C++98 standard.",
    technologies: [
        "C++",
        "Socket",
        "Static web site",
        "Http",
        ],
    image: "./Web.webp",
    github: "",
    link: "",
  },
  
];
