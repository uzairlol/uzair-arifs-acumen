import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-serif font-semibold text-center text-foreground mb-12">
          <span className="text-primary">Education</span>
        </h2>
        
        <div className="space-y-8">
          <div className="bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">
                    BS Economics & Mathematics
                  </h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>2021 - Present</span>
                  </div>
                </div>
                
                <p className="text-primary font-medium mb-2">
                  Institute of Business Administration, Karachi
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Pursuing a rigorous dual degree combining economic theory with mathematical modeling. 
                  Focus on econometrics, statistical analysis, and quantitative methods for business applications.
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    Econometrics
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    Mathematical Modeling
                  </span>
                  <span className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm">
                    Statistical Analysis
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;