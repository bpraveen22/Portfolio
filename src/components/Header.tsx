import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import Resume from '../assets/Praveen.B_Resume.pdf'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownloadCV = () => {
    // Create a dummy CV download for demo purposes
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Praveen_B_Resume.pdf';
    link.click();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="text-xl font-bold text-foreground">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Download CV Button */}
          <Button 
            onClick={handleDownloadCV}
            className="hidden md:flex bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={handleDownloadCV}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-fit"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
