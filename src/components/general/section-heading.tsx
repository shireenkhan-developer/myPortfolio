import Typography from '@/components/general/typography';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ label, title, description }: SectionHeadingProps) => {
  return (
    <div className="flex flex-col items-center gap-6 relative z-10 mb-16 md:mb-20">
      {/* Simple Heading */}
      <div className="relative w-full flex flex-col items-center">
        {/* Simple decorative line above */}
        <div className="w-24 h-px bg-white/30 mb-6"></div>
        
        {/* Simple White Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center tracking-tight text-white">
          {title}
        </h2>

        {/* Simple decorative line below */}
        <div className="w-32 h-px bg-white/30 mt-6"></div>
      </div>

      {/* Description */}
      {description && (
        <Typography variant="subtitle" className="max-w-2xl text-center text-white/90 mt-4 text-lg md:text-xl">
          {description}
        </Typography>
      )}
    </div>
  );
};

export default SectionHeading;

