import { Search, Wrench, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery",
      description: "We analyze your processes & needs to identify automation opportunities.",
      number: "01"
    },
    {
      icon: Wrench,
      title: "Build",
      description: "We design and deploy custom automation solutions tailored to your business.",
      number: "02"
    },
    {
      icon: TrendingUp,
      title: "Scale",
      description: "We monitor, optimize, and expand automations as your business grows.",
      number: "03"
    }
  ];

  return (
    <section className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simple, streamlined process to transform your business operations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div key={index} className={`flex items-center gap-8 mb-16 last:mb-0 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="card-gradient max-w-md ml-auto mr-auto lg:mr-0 lg:ml-0">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-6xl font-bold gradient-text opacity-50">
                        {step.number}
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30">
                    <Icon className="w-12 h-12 text-primary" />
                  </div>
                  
                  {/* Connecting line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
                  )}
                </div>

                {/* Spacer for mobile */}
                <div className="flex-1 lg:hidden" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;