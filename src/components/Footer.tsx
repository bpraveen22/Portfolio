import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/bpraveen22", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/praveen-b-51785a273/", label: "LinkedIn" },
    //{ icon: Mail, href: "mailto:praveenb2201@example.com", label: "Email" }
  ];

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Praveen B</h3>
            <p className="text-muted-foreground leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions 
              and bringing ideas to life through code.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover:shadow-glow group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 praveenb2201@example.com</p>
              <p>📱 +91 88705 03998</p>
              <p>📍 Chennai, Tamil Nadu, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Praveen B. All rights reserved.
            </p>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-muted-foreground italic">
            "Code is like humor. When you have to explain it, it's bad." - Cory House
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;