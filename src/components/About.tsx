const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/30 via-accent/20 to-card relative overflow-hidden">
      {/* Background Typography - Hollow Text */}
      <div className="absolute inset-0 opacity-12 pointer-events-none">
        <div className="text-[16rem] font-serif font-black text-hollow absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 rotate-12">ABOUT</div>
        <div className="text-[10rem] font-sans font-black text-hollow-secondary absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 -rotate-12">ME</div>
      </div>
      
      {/* Vibrant Organic Shapes */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-gradient-radial from-primary/50 to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-radial from-accent/50 to-transparent rounded-full blur-xl"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-secondary transform rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-serif font-semibold text-foreground">
            About <span className="text-primary">Me</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a passionate data scientist and economist currently pursuing my BS in Economics & Mathematics at the Institute of Business Administration, Karachi. As a Junior Fellow at IBA, I specialize in business cycle dating and machine learning forecasting.
            </p>
            <p>
              My research focuses on applying advanced ML techniques to economic problems, from real-time data pipelines to anomaly detection systems. I bridge the gap between economic theory and practical data science applications.
            </p>
            <p>
              When I'm not analyzing data or building models, you'll find me rowing on the water, collecting vinyl records, or exploring the intersection of AI and public policy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center space-y-2">
              <div className="text-3xl font-serif font-semibold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-serif font-semibold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">ML Projects</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-serif font-semibold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Research Papers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;