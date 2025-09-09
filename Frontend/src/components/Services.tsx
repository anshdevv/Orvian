import { Bot, Users, Settings, Search } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Call Agents & Virtual Receptionists",
      description: "Handle calls, schedule appointments, and qualify leads 24/7 with intelligent AI assistants.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Users,
      title: "Lead Generation Automation",
      description: "Capture, qualify, and nurture leads automatically across all your platforms and channels.",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Settings,
      title: "Custom Workflows",
      description: "Tailored automation for sales, HR, customer support, and operations that fits your business.",
      gradient: "from-primary/20 to-accent/5"
    },
    {
      icon: Search,
      title: "Web Scraping & Data Extraction",
      description: "Collect, structure, and deliver business-critical data at scale from any web source.",
      gradient: "from-accent/20 to-primary/5"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">AI-Powered</span> Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your business operations with cutting-edge automation technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="group">
                <div className="card-gradient h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;