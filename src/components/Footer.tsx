const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navItems = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-6">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className="space-y-4">
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
      </div>
    </footer>
  );
};

export default Footer;