import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-lg font-semibold">Devin Patterson</span>
            <span className="text-sm text-muted-foreground">
              Platform Engineering Leader | AI Infrastructure
            </span>
          </div>

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
              href="https://github.com/devinpatterson"
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

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Devin Patterson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
