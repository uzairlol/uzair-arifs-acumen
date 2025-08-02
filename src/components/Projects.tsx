import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Filter } from "lucide-react";

const projects = [
  {
    title: "Spotify Song Like Predictor",
    description: "ML model predicting song preferences with 74.5% accuracy using audio features and user behavior patterns.",
    category: "ML",
    technologies: ["Python", "scikit-learn", "Spotify API", "Feature Engineering"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Apple Stock Forecast",
    description: "LSTM-based time series forecasting model for Apple stock prices with advanced technical indicators.",
    category: "Forecasting",
    technologies: ["Python", "LSTM", "TensorFlow", "Technical Analysis"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "ECG Anomaly Detection",
    description: "Temporal Convolutional Network (TCN) for real-time ECG anomaly detection in healthcare applications.",
    category: "ML",
    technologies: ["Python", "TCN", "PyTorch", "Signal Processing"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Pakistan Inflation Forecasting",
    description: "Economic forecasting model that outperforms traditional benchmarks using ensemble methods.",
    category: "Research",
    technologies: ["R", "Prophet", "Economic Modeling", "Time Series"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Customer Churn Classifier",
    description: "Binary classification model for predicting customer churn with interpretable feature importance.",
    category: "ML",
    technologies: ["Python", "XGBoost", "SHAP", "Business Analytics"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "QGIS Real-time Streaming",
    description: "Geospatial data pipeline for real-time visualization and analysis of geographic information.",
    category: "Data Viz",
    technologies: ["Python", "QGIS", "ZeroMQ", "Geospatial Analysis"],
    githubUrl: "#",
    demoUrl: "#"
  },
  {
    title: "Bitcoin Sentiment Predictor",
    description: "NLP-based sentiment analysis correlating social media sentiment with Bitcoin price movements.",
    category: "ML",
    technologies: ["Python", "NLP", "Twitter API", "Sentiment Analysis"],
    githubUrl: "#",
    demoUrl: "#"
  }
];

const categories = ["All", "ML", "Data Viz", "Forecasting", "Research"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-serif font-semibold text-center text-foreground mb-12">
          Featured <span className="text-primary">Projects</span>
        </h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category 
                  ? "bg-primary text-primary-foreground" 
                  : "border-muted-foreground/30 hover:border-primary hover:text-primary"
              }`}
            >
              <Filter className="mr-2 h-4 w-4" />
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-background p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:border-primary/30 group"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="inline-block px-2 py-1 bg-secondary/20 text-secondary-foreground rounded text-xs">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-2 py-1 bg-accent/20 text-accent-foreground rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 hover:bg-primary hover:text-primary-foreground">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 hover:bg-secondary hover:text-secondary-foreground">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;