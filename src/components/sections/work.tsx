'use client';

import { useEffect } from 'react';
import { PROJECTS } from '@/lib/data';
import ProjectCardGrid from '@/components/data-display/project-card-grid';
import Container from '@/components/layout/container';
import SectionHeading from '@/components/general/section-heading';

const WorkSection = () => {
  // Preload all project images immediately for smooth appearance
  useEffect(() => {
    const preloadImages = async () => {
      const promises = PROJECTS?.map((project) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = typeof project.previewImage === 'string' 
            ? project.previewImage 
            : project.previewImage.src;
        });
      }) || [];
      
      try {
        await Promise.all(promises);
      } catch (error) {
        console.warn('Some images failed to preload:', error);
      }
    };
    
    preloadImages();
  }, []);

  return (
    <Container id="projects"
      style={{
        background: 'linear-gradient(to bottom, #35214e 0%, #2d1b47 50%, #25153d 100%)',
      }}
    >
      {/* Creative Section Heading */}
      <SectionHeading 
        label="Projects"
        title="Projects"
        description="Some of the noteworthy projects I have built:"
      />

      {/* Grid Layout - 3 per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PROJECTS?.map((project, index) => (
          <ProjectCardGrid
            key={`project-${index}-${project.name}`}
            {...project}
            index={index}
          />
        ))}
      </div>
    </Container>
  );
};

export default WorkSection;
