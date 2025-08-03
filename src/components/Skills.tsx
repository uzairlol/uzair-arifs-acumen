import { Code, Database, Brain, BarChart } from "lucide-react";

const skillCategories = [
  {
    title: "Machine Learning",
    icon: Brain,
    skills: ["scikit-learn", "TensorFlow", "PyTorch", "Prophet", "Darts", "XGBoost"]
  },
  {
    title: "Data Science Stack",
    icon: BarChart,
    skills: ["Python", "pandas", "NumPy", "matplotlib", "seaborn", "Plotly", "Jupyter"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-accent/30 via-background to-primary/20 relative overflow-hidden">
      {/* Background Typography - Hollow Text */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="text-[18rem] font-serif font-black text-hollow absolute -top-20 -left-20 transform -rotate-12">SKILLS</div>
        <div className="text-[12rem] font-sans font-black text-hollow-secondary absolute top-1/2 -right-24 transform rotate-12">TECH</div>
      </div>
      
      {/* Vibrant Abstract Patterns */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-radial from-primary/40 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-gradient-radial from-accent/40 to-transparent rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 border-4 border-secondary transform rotate-45"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-80 bg-gradient-to-t from-primary via-accent to-secondary transform -skew-y-12"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <h2 className="text-4xl font-serif font-semibold text-center text-foreground mb-12">
          Technical <span className="text-primary">Expertise</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
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