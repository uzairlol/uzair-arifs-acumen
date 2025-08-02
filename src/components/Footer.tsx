const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            © {currentYear} Uzair Arif. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: January 2025
          </p>
          <div className="text-xs text-muted-foreground">
            Built with React, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;