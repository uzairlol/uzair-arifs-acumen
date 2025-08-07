import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/30 via-background to-accent/25 relative overflow-hidden">
      {/* Background Typography - Hollow Text */}
      <div className="absolute inset-0 opacity-12 pointer-events-none">
        <div className="text-[14rem] font-serif font-black text-hollow-thick absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 rotate-12">CONNECT</div>
        <div className="text-[10rem] font-sans font-black text-hollow-secondary absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 -rotate-12">TALK</div>
      </div>
      
      {/* Abstract Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-gradient-radial from-primary/40 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-28 h-28 border-4 border-secondary transform rotate-45"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-52 bg-gradient-to-b from-accent via-primary to-secondary transform skew-x-12"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <h2 className="text-4xl font-serif font-semibold text-center text-foreground mb-12">
          Get In <span className="text-primary">Touch</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in discussing new opportunities, research collaborations, 
                or innovative projects at the intersection of economics and machine learning.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">uarif2093@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Follow Me</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Hobbies & Interests */}
          <div className="bg-card p-6 rounded-xl border border-border">
            <h4 className="text-lg font-semibold text-foreground mb-4">Hobbies & Interests</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-xs">🚣</span>
                </div>
                <span className="text-muted-foreground text-sm">Rowing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-xs">💪</span>
                </div>
                <span className="text-muted-foreground text-sm">Gym</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-xs">🎨</span>
                </div>
                <span className="text-muted-foreground text-sm">Abstract Art</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-xs">🎵</span>
                </div>
                <span className="text-muted-foreground text-sm">Vinyl Collection</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-xs">🌱</span>
                </div>
                <span className="text-muted-foreground text-sm">Climate Tech</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary text-xs">🤖</span>
                </div>
                <span className="text-muted-foreground text-sm">AI Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
