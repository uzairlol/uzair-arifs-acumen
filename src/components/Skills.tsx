import { Code, Database, Brain, BarChart } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "R", "SQL", "HTML/CSS", "JavaScript"]
  },
  {
    title: "ML & Data Science",
    icon: Brain,
    skills: ["scikit-learn", "TensorFlow", "PyTorch", "Prophet", "Darts"]
  },
  {
    title: "Data Analysis",
    icon: BarChart,
    skills: ["pandas", "NumPy", "matplotlib", "seaborn", "Plotly"]
  },
  {
    title: "Tools & Technologies",
    icon: Database,
    skills: ["Streamlit", "ZeroMQ", "Git", "QGIS", "Jupyter"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-serif font-semibold text-center text-foreground mb-12">
          Technical <span className="text-primary">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-card p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:border-primary/30 group">
                <div className="text-center space-y-4">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="px-3 py-2 bg-muted/50 text-muted-foreground rounded-lg text-sm hover:bg-accent/20 hover:text-accent-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;