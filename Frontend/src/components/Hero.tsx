import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ai-dashboard.jpg";

const Hero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text text-glow">Automate</span>{" "}
                <span className="text-foreground">Your Business</span>
                <br />
                <span className="text-foreground">with</span>{" "}
                <span className="gradient-text">AI Agents</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground max-w-lg">
                From AI call agents to custom scrapers, we build automations that 
                save time, reduce costs, and generate more leads.
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToForm}
                className="btn-hero text-lg px-8 py-6 pulse-glow"
              >
                Book a Free Consultation
              </Button>
            
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">40+</div>
                <div className="text-sm text-muted-foreground">Hours Saved/Month</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">3x</div>
                <div className="text-sm text-muted-foreground">Lead Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-sm text-muted-foreground">AI Availability</div>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative">
            <div className="relative float">
              <img 
                src={heroImage} 
                alt="AI Automation Dashboard" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;