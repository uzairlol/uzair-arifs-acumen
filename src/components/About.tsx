const About = () => {
  return (
    <section id="about" className="py-20 bg-card relative overflow-hidden">
      {/* Background Typography */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <div className="text-[16rem] font-serif font-bold text-primary absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 rotate-12">ABOUT</div>
      </div>
      
      {/* Subtle Organic Shapes */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-gradient-radial from-primary to-transparent rounded-full blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-gradient-radial from-accent to-transparent rounded-full blur-xl"></div>
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