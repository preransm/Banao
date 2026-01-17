interface FloatingSpheresProps {
  className?: string;
}

const FloatingSpheres = ({ className }: FloatingSpheresProps) => {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Large coral sphere - top right */}
      <div className="float-slow absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 blur-3xl" />
      
      {/* Medium purple sphere - left */}
      <div className="float-medium absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 blur-3xl" />
      
      {/* Small coral sphere - bottom right */}
      <div className="float-fast absolute bottom-20 right-1/4 h-40 w-40 rounded-full bg-gradient-to-br from-primary/25 to-transparent blur-2xl" />
      
      {/* Decorative dark spheres */}
      <div className="float-slow absolute right-1/3 top-1/4 h-16 w-16 rounded-full bg-muted/80 shadow-lg" />
      <div className="float-medium absolute bottom-1/3 left-1/4 h-12 w-12 rounded-full bg-muted shadow-md" />
      <div className="float-fast absolute right-20 top-1/2 h-8 w-8 rounded-full bg-card shadow" />
    </div>
  );
};

export default FloatingSpheres;
