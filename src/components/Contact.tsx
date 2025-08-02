import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
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
                  <p className="text-muted-foreground">uzair.arif@example.com</p>
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
          
          {/* Languages & Interests */}
          <div className="space-y-8">
            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-4">Languages</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">English</span>
                  <span className="text-sm text-primary">Fluent</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Urdu</span>
                  <span className="text-sm text-primary">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">French</span>
                  <span className="text-sm text-secondary">Learning</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <h4 className="text-lg font-semibold text-foreground mb-4">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {["Rowing", "Gym", "Abstract Art", "Vinyl Collection", "Climate Tech", "AI for Policy"].map((interest, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;