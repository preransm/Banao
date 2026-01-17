import { BarChart3, Lock, Zap, Globe, Layers, Users } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Get detailed insights into your business performance with our powerful analytics dashboard.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "Your data is protected with bank-level encryption and advanced security protocols.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized for speed and performance. Experience blazing fast load times.",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description:
      "Content delivered from servers closest to your users for optimal performance.",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description:
      "Connect with your favorite tools and services with our extensive API.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work together seamlessly with real-time collaboration features.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold text-primary">
            Features
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Everything you need to{" "}
            <span className="gradient-text">succeed</span>
          </h2>
          <p className="text-muted-foreground">
            Powerful features to help you manage and grow your business
            efficiently.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-card rounded-2xl p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 transition-colors group-hover:from-primary/30 group-hover:to-accent/30">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
