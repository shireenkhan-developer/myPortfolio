'use client';

import { useEffect, useState } from 'react';
import { EXPERIENCES } from '@/lib/data';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Container from '@/components/layout/container';
import SectionHeading from '@/components/general/section-heading';
import Image from 'next/image';

interface ExperienceCardProps {
  experience: typeof EXPERIENCES[0];
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const formatDate = (date: Date) => {
    // Fixed month names to avoid server/client mismatch
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${month} ${year}`;
  };

  const duration = experience.endDate
    ? `${formatDate(experience.startDate)} - ${formatDate(experience.endDate)}`
    : experience.currentlyWorkHere
    ? `${formatDate(experience.startDate)} - Present`
    : formatDate(experience.startDate);

  // Use technologies from experience data if available
  const uniqueTechnologies = experience.technologies || [];

  return (
    <VerticalTimelineElement
      contentStyle={{ 
        background: 'rgba(30, 27, 75, 0.6)', 
        color: '#fff',
        border: '1px solid rgba(79, 70, 229, 0.3)',
        borderRadius: '12px',
        backdropFilter: 'blur(10px)',
      }}
      contentArrowStyle={{ 
        borderRight: '7px solid rgba(30, 27, 75, 0.6)',
      }}
      date={duration}
      dateClassName="!text-white"
      iconStyle={{ 
        background: 'rgba(79, 70, 229, 0.8)', 
        color: '#fff',
        border: '2px solid rgba(124, 58, 237, 0.5)',
        boxShadow: '0 0 20px rgba(79, 70, 229, 0.5)',
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full overflow-hidden rounded-full bg-white">
          {experience.darkModeLogo ? (
            <Image
              src={experience.darkModeLogo}
              alt={experience.logoAlt}
              width={64}
              height={64}
              className={`w-full h-full ${experience.logoAlt === 'Fauji Fertilizer Bin Qasim Ltd. (FFBL)' ? 'object-contain p-1' : 'object-cover'}`}
              unoptimized
            />
          ) : experience.logo ? (
            <Image
              src={experience.logo}
              alt={experience.logoAlt}
              width={64}
              height={64}
              className={`w-full h-full ${experience.logoAlt === 'Fauji Fertilizer Bin Qasim Ltd. (FFBL)' ? 'object-contain p-1' : 'object-cover'}`}
              unoptimized
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-600 text-xs font-bold">
              {experience.logoAlt.charAt(0)}
            </div>
          )}
        </div>
      }
    >
      {/* Experience Header */}
      <div>
        <h3 className="text-white text-base font-bold mb-1">
          {experience.position}
        </h3>
        <p className="text-white/80 text-base font-mono" style={{ margin: 0 }}>
          {experience.logoAlt.replace(' logo', '')}
        </p>
      </div>

      {/* Technologies */}
      {uniqueTechnologies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {uniqueTechnologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="bg-stellar-indigo/20 text-white border border-stellar-indigo/30 text-xs md:text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Summary Points */}
      {experience.summary && experience.summary.length > 0 && (
        <div className="mt-5">
          <h4 className="text-sm text-white font-semibold mb-2">Key Achievements:</h4>
          <ul className="list-disc ml-5 space-y-1">
            {experience.summary.map((point, i) => (
              <li
                key={`point-${i}`}
                className="text-white/80 text-xs md:text-sm font-medium"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </VerticalTimelineElement>
  );
};

const ExperienceSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Pre-calculate particle positions to avoid hydration issues
  const particles = isMounted ? Array.from({ length: 6 }, (_, index) => {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    const randomDelay = Math.random() * 5;
    const randomDuration = 15 + Math.random() * 10;
    const size = 1 + Math.random() * 1.5;
    const colorChoice = index % 3;
    const colors = ['#6366f1', '#7c3aed', '#6d28d9'];
    return { randomX, randomY, randomDelay, randomDuration, size, color: colors[colorChoice] };
  }) : [];

  const stellarParticles = isMounted ? Array.from({ length: 3 }, (_, index) => {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    const randomDelay = Math.random() * 3;
    const randomDuration = 3 + Math.random() * 2;
    return { randomX, randomY, randomDelay, randomDuration };
  }) : [];

  return (
    <Container className="relative" id="experience"
      style={{
        background: 'linear-gradient(to bottom, #3f2553 0%, #3a234e 50%, #35214e 100%)',
      }}
    >
      {/* Space Particles for Experience Section */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Small floating space particles - reduced count for performance */}
          {particles.map((particle, index) => (
            <div
              key={`exp-particle-${index}`}
              className="space-particle"
              style={{
                left: `${particle.randomX}%`,
                top: `${particle.randomY}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                background: particle.color,
                boxShadow: `0 0 ${particle.size * 2}px ${particle.color}, 0 0 ${particle.size * 4}px ${particle.color}80`,
                animation: `floatSlow ${particle.randomDuration}s ease-in-out infinite`,
                animationDelay: `${particle.randomDelay}s`,
              }}
            />
          ))}
          
          {/* Twinkling stellar particles - reduced for performance */}
          {stellarParticles.map((particle, index) => (
            <div
              key={`exp-stellar-${index}`}
              className="stellar-particle"
              style={{
                left: `${particle.randomX}%`,
                top: `${particle.randomY}%`,
                animation: `twinkle ${particle.randomDuration}s ease-in-out infinite`,
                animationDelay: `${particle.randomDelay}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Section Heading */}
      <SectionHeading 
        label="Experience"
        title="Work Experience"
        description="Here is a quick summary of my most recent experiences:"
      />

      {/* Vertical Timeline */}
      <div className="relative z-10">
        <VerticalTimeline lineColor="rgba(255, 255, 255, 0.2)">
          {EXPERIENCES?.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </Container>
  );
};

export default ExperienceSection;
