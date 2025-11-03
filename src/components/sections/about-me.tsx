'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';
import SectionHeading from '@/components/general/section-heading';

const AboutMeSection = () => {
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
    <Container className="relative" id="about" 
      style={{
        background: 'linear-gradient(to bottom, #0a0515 0%, #1a0d2e 50%, #25153d 100%)',
      }}
    >
      {/* Space Particles for About Section */}
      {isMounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          {/* Small floating space particles - reduced count for performance */}
          {particles.map((particle, index) => (
            <div
              key={`about-particle-${index}`}
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
              key={`about-stellar-${index}`}
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

      {/* Creative Section Heading */}
      <SectionHeading 
        label="About"
        title="About Me"
        description="Curious about me? Here you have it:"
      />

      <div className="flex w-full flex-col justify-center items-center gap-8 md:gap-12 lg:gap-16 md:flex-row relative z-10">
        {/* Profile Image - Circular Static - Top Aligned */}
        <div className="flex justify-center md:order-first md:justify-start md:items-start">
          <div className="relative h-[220px] w-[220px] md:h-[250px] md:w-[250px] lg:h-[280px] lg:w-[280px]">
            {/* Circular frame container */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Outer gradient ring with soft glow effect */}
              <div 
                className="absolute inset-0 rounded-full p-[2px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.4), rgba(124, 58, 237, 0.3), rgba(109, 40, 217, 0.4))',
                  boxShadow: '0 0 15px rgba(79, 70, 229, 0.3), 0 0 30px rgba(124, 58, 237, 0.2)',
                }}
              >
                {/* Inner container */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-cosmic-100/10 backdrop-blur-sm flex items-center justify-center">
                  {/* Profile image */}
            <Image
                    src="/images/profile.png"
                    alt="Shireen Khan"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-top rounded-full"
                    style={{ objectPosition: 'center 30%', transform: 'scale(1.6)' }}
                    priority
                  />
                  
                  {/* Soft inner border */}
                  <div 
                    className="absolute inset-0 rounded-full border border-white/10 pointer-events-none"
                    style={{
                      boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.05)',
                    }}
                  />
                </div>
              </div>
              
              {/* Soft outer glow ring - subtle fading effect */}
              <div 
                className="absolute -inset-4 rounded-full opacity-30 blur-xl pointer-events-none"
                style={{
                  background: 'radial-gradient(ellipse, rgba(79, 70, 229, 0.4) 0%, rgba(124, 58, 237, 0.2) 50%, transparent 80%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-[700px] flex-col gap-6">
          <Typography className="text-white">
            I&apos;m a Software Engineering graduate and a passionate Full-Stack Developer who fell in love with tech long before I even knew what &quot;code&quot; meant. As a kid, I was always curious about what happens behind the games I played, and now I get to create those &quot;behind-the-scenes&quot; moments myself.
          </Typography>
          <Typography className="text-white">
            I&apos;m an AI/ML enthusiast, a lifelong learner, and someone who genuinely enjoys solving tough problems, even when things get overwhelming (and they do sometimes XD). I may not always be the best in the room, but I never give up, and that&apos;s what truly sets me apart. I believe that &quot;it&apos;s not about being perfect, it&apos;s about being persistent.&quot;
          </Typography>
          <Typography className="text-white">
            These days, I&apos;m exploring the early stages of a tech startup, where I&apos;m experimenting with innovative solutions and learning how to translate abstract ideas into structured plans. This journey is helping me strengthen my entrepreneurial mindset and sharpen my skills in product thinking, strategy, and leadership, while constantly learning through ideation and feedback.
          </Typography>
          <Typography className="text-white">
            My goal is to take on challenging projects, learn from inspiring mentors, and make meaningful contributions to the tech community.
          </Typography>
          <Typography className="text-white">
            🚀 Available for freelance projects and new opportunities — let&apos;s build something extraordinary together!
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;
