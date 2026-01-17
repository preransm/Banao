import { Star } from "lucide-react";

const testimonials = [
  {
    content:
      "This platform has completely transformed how we manage our projects. The analytics are incredible and the team collaboration features are exactly what we needed.",
    author: "Sarah Johnson",
    role: "CEO at TechStart",
    avatar: "SJ",
  },
  {
    content:
      "The best investment we've made for our business. Setup was quick, the interface is intuitive, and the support team is always there when we need them.",
    author: "Michael Chen",
    role: "Founder at DevFlow",
    avatar: "MC",
  },
  {
    content:
      "I've tried many similar tools, but none come close to this. The attention to detail and the constant improvements make it stand out from the competition.",
    author: "Emily Rodriguez",
    role: "Product Manager at Scale",
    avatar: "ER",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-20 lg:py-32 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold text-primary">
            Testimonials
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Loved by{" "}
            <span className="gradient-text">thousands</span>
          </h2>
          <p className="text-muted-foreground">
            See what our customers have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-primary/30"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              
              {/* Content */}
              <p className="mb-6 text-muted-foreground leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-semibold text-primary-foreground">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
