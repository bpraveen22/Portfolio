import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "BE - Computer Science & Engineering",
      institution: "Nellai College of Engineering",
      period: "2018 to 2022",
      grade: "CGPA 7.8"
    },
    {
      degree: "HSC",
      institution: "Annai Matriculation Higher Secondary School",
      period: "2018",
      grade: "55%"
    },
    {
      degree: "SSLC",
      institution: "Annai Matriculation Higher Secondary School",
      period: "2016",
      grade: "72%"
    }
  ];

  const experience = [
    {
      role: "Full Stack Developer with ReactJS Intern",
      company: "Maasmind",
      period: "Dec 2024 to Present",
      current: true
    },
 {
      role: "Full Stack Web Developer Intern",
      company: "Novitech R&D Pvt Ltd",
      period: "Feb 2024 to Mar 2024",
    },
    {
      role: "Junior Web Developer",
      company: "SeyaSoft Technologies Pvt.",
      period: "July 2022 to May 2023",
    }
   
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I am a passionate Full Stack Developer with a strong foundation in computer science and hands-on experience 
            in modern web technologies. My journey began with a solid educational background and has been enriched through 
            practical internships and professional roles. I thrive on creating efficient, scalable solutions and am always 
            eager to embrace new challenges and technologies in the ever-evolving world of software development.
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 flex items-center">
            <GraduationCap className="w-8 h-8 mr-3 text-primary" />
            Education
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-card transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    {edu.degree}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                  <p className="text-primary font-semibold">{edu.grade}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 flex items-center">
            <Briefcase className="w-8 h-8 mr-3 text-primary" />
            Experience
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experience.map((exp, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-card transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    {exp.role}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                  {exp.current && (
                    <span className="inline-block px-3 py-1 text-xs bg-primary text-primary-foreground rounded-full mb-4">
                      Current
                    </span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;