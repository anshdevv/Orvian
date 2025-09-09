import { Zap, Clock, DollarSign, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Tailored Solutions",
      description: "Custom workflows designed specifically for your business, not cookie-cutter templates."
    },
    {
      icon: Clock,
      title: "Fast Deployment", 
      description: "Get your automations live in days, not months. Quick implementation, immediate results."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Clear, flexible pricing with no hidden fees. Pay for value, not complexity."
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Automations that grow with your business, adapting to changing needs and volumes."
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're not just another automation company. We're your strategic partner in digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            
            return (
              <div key={index} className="text-center group">
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {reason.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional benefits */}
        <div className="max-w-4xl mx-auto">
          <div className="card-gradient text-center">
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              The Complete Package
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Monitoring & Support</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <p className="text-muted-foreground">Uptime Guarantee</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">ROI</div>
                <p className="text-muted-foreground">Within 30 Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;