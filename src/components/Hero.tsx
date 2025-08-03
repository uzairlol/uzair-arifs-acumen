import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import heroImage from "@/assets/hero-silhouette.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-primary/5 to-secondary/10 px-4 relative overflow-hidden">
      {/* Large Background Typography - Hollow Text */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="text-[25rem] font-serif font-black text-hollow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-6">DATA</div>
        <div className="text-[15rem] font-sans font-black text-hollow-secondary absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 rotate-12">SCIENTIST</div>
      </div>
      
      {/* Vibrant Flowing Elements */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-4 bg-gradient-to-r from-accent via-primary to-secondary transform -rotate-12"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-3 bg-gradient-to-l from-secondary via-accent to-primary transform rotate-12"></div>
        <div className="absolute top-1/2 right-20 w-4 h-96 bg-gradient-to-b from-primary via-accent to-secondary transform rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/3 w-60 h-60 bg-gradient-radial from-accent/30 to-transparent rounded-full"></div>
      </div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center max-w-6xl relative z-10">
        {/* Text Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-serif font-semibold text-foreground leading-tight">
              Uzair <span className="text-primary">Arif</span>
            </h1>
            <p className="text-xl lg:text-2xl text-secondary font-medium">
              Data Scientist | Economist | ML Researcher
            </p>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Bridging economic theory with machine learning to uncover insights from complex data patterns and business cycles.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative lg:order-last">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={heroImage} 
              alt="Uzair Arif - Data Scientist"
              className="w-full h-[400px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
          
          {/* Floating elements for visual interest */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;