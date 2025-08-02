import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Junior Fellow",
    company: "Institute of Business Administration",
    period: "2024 - Present",
    description: "Leading business cycle dating research and developing ML forecasting models for economic indicators.",
    technologies: ["Python", "Prophet", "Darts", "TensorFlow", "Economic Modeling"]
  },
  {
    title: "Research Assistant",
    company: "IBA Research Project",
    period: "2024",
    description: "Conducted ML analysis of patriotic songs using natural language processing and sentiment analysis techniques.",
    technologies: ["Python", "NLP", "Sentiment Analysis", "scikit-learn", "pandas"]
  },
  {
    title: "Business Analytics Consultant",
    company: "Ali Khan Consultants",
    period: "2023",
    description: "Identified operational inefficiencies and developed data-driven solutions for business process optimization.",
    technologies: ["R", "Business Intelligence", "Data Visualization", "SQL"]
  },
  {
    title: "Data Science Intern",
    company: "NASTP",
    period: "2023",
    description: "Built real-time data pipelines and developed ECG anomaly detection systems using temporal convolutional networks.",
    technologies: ["Python", "ZeroMQ", "TCN", "Real-time Processing", "Anomaly Detection"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-serif font-semibold text-center text-foreground mb-12">
          <span className="text-primary">Experience</span>
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-background p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:border-primary/30">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-primary font-medium mb-3">
                    {exp.company}
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm hover:bg-secondary/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;