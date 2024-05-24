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
    title: "DevOps",
    name: "inception",
    description:
      "Collaborative web development project creating a real-time multiplayer Pong game. Utilizes NestJS backend, nextJS frontend, PostgreSQL database, and OAuth authentication. Key features include secure login, live chat, and multiplayer gaming in a responsive, single-page app. Emphasizes security, usability, and Docker-based deployment for seamless integration.",
    technologies: [
        "Wordpress",
        "MariaDB",
        "Nginx",
        "hugo",
        "Adminer",
        "Redis",
        "Docker",
        "VertualBox",
        ],
    image: "./Docker.png",
    github: "",
    link: "",
  },
  
];
