import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "YZEC Fashions (E-Commerce Web App)",
    description:
      "Full-stack MERN e-commerce platform with product listings, cart functionality, authentication, and a fully responsive UI. Built REST APIs using Node.js and Express, managed data with MongoDB, and designed modern layouts using Tailwind CSS.",
    image: "/project1.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    demoUrl: "https://yzec-fashions-frontend.vercel.app",
    githubUrl: "https://github.com/Wizard375/yzec-fashions-web",
  },
  {
    id: 2,
    title: "YZEC Foods Website",
    description:
      "A responsive food ordering website built using React JS and CSS. Users can browse menu items, explore categories, and experience a clean, modern UI with smooth navigation and interactive components.",
    image: "/project2.png",
    tags: ["React JS", "CSS"],
    demoUrl: "https://yzec-foods.netlify.app/",
    githubUrl: "https://github.com/Wizard375/YZEC-Foods-REACT",
  },
  {
    id: 3,
    title: "YZEC Studies (AI Education App)",
    description:
      "AI-powered education application built with React Native (Expo) and Firebase, generating personalized study content using Google Gemini API.",
    image: "/project3.png",
    tags: ["React Native", "Firebase", "Google Gemini API"],
    demoUrl: "https://expo.dev/artifacts/eas/x5uFT81W1JMYTbDQEaG4it.apk",
    githubUrl: "https://github.com/Wizard375/YZEC-Studies",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-md transition-all duration-300 h-full flex flex-col card-hover hover:shadow-2xl"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Wizard375"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
