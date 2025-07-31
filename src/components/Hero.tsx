import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import profileImage from "../assets/Praveen photo.jpg";

const Hero: React.FC = () => {
  // Social links with direct mailto: and tel: links
  const socialLinks = [
    { icon: Github, href: "https://github.com/bpraveen22", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/praveen-b-51785a273/", label: "LinkedIn" },
    // Direct email link: opens email client with your email address
    //{ icon: Mail, href: "mailto:praveenb2201@gmail.com", label: "Email" },
    // Direct phone link: opens dialer on mobile or compatible devices
    //{ icon: Phone, href: "tel:+918870503998", label: "Contact" }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fadeInUp">
          {/* Profile Image */}
            <div className="mb-8" style={{marginTop: "1rem", marginBottom: "1rem"}}>
            <div className="relative inline-block">
              <img
                src={profileImage}
                alt="Praveen B"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary shadow-card animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-glow"></div>
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Praveen B
          </h1>

          {/* Job Role */}
          <h2 className="text-xl md:text-2xl text-primary font-semibold mb-6">
            Full Stack Developer
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Passionate Full Stack Developer with expertise in ReactJS, Java, Spring Boot,Node JS and My SQL. 
          
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover:shadow-glow group"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-foreground group-hover:text-primary-foreground transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
