import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border mt-16">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-primary">Suyash Sharma</h3>
          <p className="text-sm text-muted-foreground">
            Full-Stack Developer | React & React Native
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} Suyash Sharma. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/suyash-sharma-706342296/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-primary/10 transition"
          >
            <Linkedin size={18} />
          </a>

          <a
            href="https://github.com/wizard375"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-primary/10 transition"
          >
            <Github size={18} />
          </a>

          <a
            href="mailto:suyashsha375@gmail.com"
            className="p-2 rounded-full hover:bg-primary/10 transition"
          >
            <Mail size={18} />
          </a>

          {/* Scroll To Top */}
          <a
            href="#hero"
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
