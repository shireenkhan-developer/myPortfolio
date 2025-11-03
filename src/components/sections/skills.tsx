import { TECHNOLOGIES } from '@/lib/data';
import TechDetails from '@/components/data-display/tech-details';
import Container from '@/components/layout/container';
import SectionHeading from '@/components/general/section-heading';

const SkillsSection = () => {
  return (
    <Container id="skills"
      style={{
        background: 'linear-gradient(to bottom, #35214e 0%, #3a234e 50%, #3f2553 100%)',
      }}
    >
      {/* Creative Section Heading */}
      <SectionHeading 
        label="Skills"
        title="Skills"
        description="The skills, tools and technologies I am really good at:"
      />

      <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;
