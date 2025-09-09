import { Building2, Rocket, TrendingUp } from "lucide-react";

const UseCases = () => {
  const cases = [
    {
      icon: Building2,
      industry: "Real Estate Agency",
      result: "Saved 40+ hours/month",
      description: "AI receptionist handles inquiries, schedules viewings, and qualifies prospects automatically.",
      metric: "40+ hours",
      metricLabel: "Monthly Time Savings"
    },
    {
      icon: Rocket,
      industry: "SaaS Company", 
      result: "3x qualified leads",
      description: "Workflow automation captures, scores, and nurtures leads across multiple channels.",
      metric: "3x",
      metricLabel: "Lead Qualification"
    },
    {
      icon: TrendingUp,
      industry: "E-commerce Store",
      result: "85% faster responses",
      description: "Custom workflows automate order processing, inventory tracking, and customer support.",
      metric: "85%",
      metricLabel: "Response Speed"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Real <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how businesses like yours are transforming with AI automation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {cases.map((useCase, index) => {
            const Icon = useCase.icon;
            
            return (
              <div key={index} className="group">
                <div className="card-gradient h-full transition-all duration-300 hover:scale-105">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{useCase.industry}</h3>
                      <p className="text-sm text-primary font-medium">{useCase.result}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {useCase.description}
                  </p>

                  {/* Metric highlight */}
                  <div className="border-t border-border/50 pt-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text mb-1">
                        {useCase.metric}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {useCase.metricLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to see similar results for your business?
          </p>
          <button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-accent text-lg px-8 py-3"
          >
            Get Your Custom Solution
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;