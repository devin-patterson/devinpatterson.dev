import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Resume", href: "/resume" },
  { name: "Projects", href: "/projects" },
  { name: "Certifications", href: "/certifications" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-lg font-semibold">Devin Patterson</span>
            <span className="text-sm text-muted-foreground">
              Platform Engineering Leader | AI Infrastructure
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-semibold mb-3">Quick Links</span>
            <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <span className="font-semibold mb-3">Connect</span>
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.linkedin.com/in/devin-patterson-technologist"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://github.com/devin-patterson"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </Link>
              <Link
                href="mailto:devin@devinpatterson.dev"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Devin Patterson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
