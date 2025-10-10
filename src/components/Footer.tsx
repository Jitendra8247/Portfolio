export const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Jitendra Kumar. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:email@example.com" className="hover:text-primary transition-smooth">
              Jitendra223258@gmail.com
            </a>
            <span>|</span>
            <a href="tel:+917037435047" className="hover:text-primary transition-smooth">
              +91 7037435047
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
