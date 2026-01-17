import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FloatingSpheres from "./FloatingSpheres";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <FloatingSpheres />
      
      <div className="container relative z-10 mx-auto px-4 py-20 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm backdrop-blur-sm animate-fade-in">
            <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-primary">
              New
            </span>
            <span className="text-muted-foreground">Introducing Squid 2.0</span>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
            Beautiful Landing Page{" "}
            <span className="gradient-text">Design for You</span>
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link to="/signup">
              <Button variant="hero" size="xl">
                Get Strted
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="heroOutline" size="xl" className="gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20">
                <Play className="h-4 w-4 text-primary" fill="currentColor" />
              </div>
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative mx-auto mt-20 max-w-5xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="glass-card overflow-hidden rounded-2xl border border-border/50 p-2 shadow-2xl">
            <div className="aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-card to-muted">
              {/* Mock Dashboard UI */}
              <div className="flex h-full">
                {/* Sidebar */}
                <div className="hidden w-48 border-r border-border/50 bg-card/50 p-4 sm:block">
                  <div className="mb-6 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
                    <span className="text-sm font-semibold">Dashboard</span>
                  </div>
                  <div className="space-y-2">
                    {["Overview", "Analytics", "Projects", "Team", "Settings"].map((item, i) => (
                      <div
                        key={item}
                        className={`rounded-lg px-3 py-2 text-xs ${
                          i === 0 ? "bg-primary/20 text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Main Content */}
                <div className="flex-1 p-4 sm:p-6">
                  {/* Stats Cards */}
                  <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {[
                      { label: "Total Revenue", value: "$45,231", change: "+20.1%" },
                      { label: "Subscriptions", value: "+2350", change: "+180.1%" },
                      { label: "Active Users", value: "+12,234", change: "+19%" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-lg border border-border/50 bg-card/30 p-3"
                      >
                        <p className="text-[10px] text-muted-foreground sm:text-xs">{stat.label}</p>
                        <p className="text-sm font-bold sm:text-lg">{stat.value}</p>
                        <p className="text-[10px] text-primary">{stat.change}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Chart Placeholder */}
                  <div className="rounded-lg border border-border/50 bg-card/30 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-medium sm:text-sm">Overview</span>
                      <div className="flex gap-2">
                        <div className="h-2 w-8 rounded-full bg-primary/50" />
                        <div className="h-2 w-8 rounded-full bg-accent/50" />
                      </div>
                    </div>
                    <div className="flex h-20 items-end gap-1 sm:h-32 sm:gap-2">
                      {[40, 60, 30, 80, 50, 70, 45, 90, 55, 75, 60, 85].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t bg-gradient-to-t from-primary/20 to-primary/60"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
