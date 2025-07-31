import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Server } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technology",
      icon: Code,
      skills: [
        { name: "ReactJS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Bootstrap", level: 80 },
        { name: "JSP", level: 75 }
      ]
    },
    {
      title: "Backend Technology",
      icon: Server,
      skills: [
        { name: "Java", level: 85 },
        { name: "SpringBoot", level: 80 },
        { name: "Node JS", level: 80 },
        { name: "Servlet", level: 75 }
      ]
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "Oracle", level: 75 },
        { name: "MySQL", level: 80 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 80) return "bg-gradient-to-r from-green-500 to-green-600";
    if (level >= 70) return "bg-gradient-to-r from-blue-500 to-blue-600";
    return "bg-gradient-to-r from-yellow-500 to-yellow-600";
  };

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-card border-border hover:shadow-card transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted"
                      />
                      <div 
                        className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-700 ease-out ${getSkillColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        {/* <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">Other Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Git", "GitHub", "REST APIs", "Responsive Design", "Agile", "Problem Solving"].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
