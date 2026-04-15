import { Link } from "react-router";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/">
          <span className="text-xl font-extrabold gradient-text">
            AgentFlou
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a
            href="#features"
            className="hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#platforms"
            className="hover:text-foreground transition-colors"
          >
            Platforms
          </a>
          <a href="#how" className="hover:text-foreground transition-colors">
            How it Works
          </a>
          <a
            href="#pricing"
            className="hover:text-foreground transition-colors"
          >
            Pricing
          </a>
        </div>
        <a href="#cta" className="btn-primary text-sm !py-2.5 !px-5">
          Get Started
        </a>
      </div>
    </nav>
  );
}
