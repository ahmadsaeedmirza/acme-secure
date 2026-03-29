interface PageHeroProps {
  image: string;
  title: string;
  subtitle: string;
  altText?: string;
}

const PageHero = ({ image, title, subtitle, altText }: PageHeroProps) => {
  return (
    <section className="relative min-h-[45vh] mt-[80px] flex items-center justify-center">
      <img
        src={image}
        alt={altText || title}
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="container mx-auto relative z-10 text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4 animate-fade-in-up">
          {title}
        </h1>
        <p
          className="text-primary-foreground/70 max-w-2xl mx-auto text-lg animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHero;
