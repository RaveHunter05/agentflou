import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-lg font-extrabold gradient-text">AgentFlou</span>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link
            to="/privacy"
            className="hover:text-foreground transition-colors"
          >
            Privacy
          </Link>
          <Link to="/terms" className="hover:text-foreground transition-colors">
            Terms
          </Link>
          <Link
            to="/contact"
            className="hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </div>
        <span className="text-sm text-muted-foreground">
          © 2026 AgentFlou. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
