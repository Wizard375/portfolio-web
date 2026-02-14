import { Code, Rocket, Server, Wrench } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold ">
              Passionate Web & Mobile App Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Computer Science Graduate with hands-on experience in developing
              full-stack web applications using MongoDB, Express.js, React.js,
              and Node.js. Proficient in building RESTful APIs, managing
              databases, and implementing scalable application architecture.
              Additionally experienced in Android and React Native development
              with Firebase integration
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I focus on clean architecture, modern UI design, and performance
              optimization to create seamless digital experiences.
            </p>

            {/* Buttons */}
            <div className="pt-6 flex gap-4 items-center  justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="./SuyashNewResume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Part */}
          <div>
            <div className="grid grid-cols-1 gap-6 text-left">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Building responsive and modern web applications using
                      React and modern frameworks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Backend Systems</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Developing REST APIs and scalable server-side logic using
                      Node.js and Express.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Tools & Workflow</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Git, GitHub, VS Code, and modern development best
                      practices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Performance Focus</h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Optimizing UI and architecture for smooth, scalable user
                      experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
