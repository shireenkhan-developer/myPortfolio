'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { MapPin } from 'lucide-react';
import SocialIcons from '@/components/data-display/social-icons';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

const StarCanvas = dynamic(() => import('@/components/general/starfield'), {
  ssr: false,
  loading: () => null, // No loader - stars will appear directly
});

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Pre-calculate star positions to avoid hydration issues
  const smallStars = isMounted ? Array.from({ length: 20 }, (_, i) => {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    const randomSize = 0.5 + Math.random() * 1.5;
    const randomDelay = Math.random() * 3;
    const randomDuration = 2 + Math.random() * 2;
    return { randomX, randomY, randomSize, randomDelay, randomDuration };
  }) : [];

  const largeStars = isMounted ? Array.from({ length: 6 }, (_, i) => {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    const randomDelay = Math.random() * 3;
    const randomDuration = 3 + Math.random() * 2;
    return { randomX, randomY, randomDelay, randomDuration };
  }) : [];

  return (
    <Container id="hero" className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #000000 0%, #0a0a1a 20%, #151525 40%, #1a1a2a 50%, #151525 60%, #0a0a1a 80%, #000000 100%)',
      }}
    >
      {/* 3D Starfield Canvas */}
      <StarCanvas />
      
      {/* Galaxy Backdrop - Dark Blackish Blue/Purple */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden" 
        style={{
          background: `
            radial-gradient(ellipse at top left, rgba(49, 46, 129, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at top right, rgba(67, 56, 202, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at bottom left, rgba(79, 70, 229, 0.10) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, rgba(49, 46, 129, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at center, rgba(30, 27, 75, 0.05) 0%, transparent 60%)
          `,
        }}
      >
        {/* Stars Layer - Small twinkling stars */}
        {isMounted && smallStars.map((star, i) => (
          <div
            key={`hero-star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.randomX}%`,
              top: `${star.randomY}%`,
              width: `${star.randomSize}px`,
              height: `${star.randomSize}px`,
              boxShadow: `0 0 ${star.randomSize * 1.5}px rgba(255, 255, 255, 0.6), 0 0 ${star.randomSize * 3}px rgba(79, 70, 229, 0.3)`,
              animation: `twinkle ${star.randomDuration}s ease-in-out infinite`,
              animationDelay: `${star.randomDelay}s`,
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
              opacity: 0.6,
            }}
          />
        ))}

        {/* Large Twinkling Stars */}
        {isMounted && largeStars.map((star, i) => (
          <div
            key={`hero-large-star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.randomX}%`,
              top: `${star.randomY}%`,
              width: '3px',
              height: '3px',
              boxShadow: `
                0 0 6px rgba(79, 70, 229, 0.7),
                0 0 12px rgba(124, 58, 237, 0.5),
                0 0 18px rgba(109, 40, 217, 0.3)
              `,
              animation: `twinkle ${star.randomDuration}s ease-in-out infinite`,
              animationDelay: `${star.randomDelay}s`,
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
              opacity: 0.8,
            }}
          />
        ))}

        {/* Subtle Galaxy Glow - Very subtle backdrop */}
        <div
          className="absolute rounded-full"
          style={{
            right: '15%',
            top: '20%',
            width: '400px',
            height: '400px',
            background: `radial-gradient(ellipse, rgba(49, 46, 129, 0.08) 0%, transparent 70%)`,
            filter: 'blur(60px)',
            animation: 'pulseGlow 10s ease-in-out infinite',
            willChange: 'transform, opacity',
            opacity: 0.6,
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            left: '20%',
            bottom: '15%',
            width: '350px',
            height: '350px',
            background: `radial-gradient(ellipse, rgba(67, 56, 202, 0.06) 0%, transparent 70%)`,
            filter: 'blur(50px)',
            animation: 'pulseGlow 12s ease-in-out infinite',
            animationDelay: '3s',
            willChange: 'transform, opacity',
            opacity: 0.5,
          }}
        />
        </div>


      {/* Centered Content */}
      <div className="flex w-full items-center justify-center relative z-[10]">
        <div className="flex flex-col items-center text-center max-w-4xl gap-8 2xl:gap-12">
          <div className="flex flex-col gap-6">
            {/* Hi, I am */}
            <h2 className="md:text-5xl sm:text-4xl text-2xl font-medium text-white text-center">
              Hi, I am
            </h2>
            
            {/* Shireen Khan with Gradient */}
            <h1 className="text-center md:text-5xl sm:text-4xl text-3xl font-bold transition-all duration-300">
              <span
                className="inline-block"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, rgba(200, 180, 255, 1) 30%, rgba(124, 58, 237, 1) 70%, rgba(109, 40, 217, 1) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 20px rgba(79, 70, 229, 0.6)) drop-shadow(0 0 40px rgba(124, 58, 237, 0.4))',
                }}
              >
                Shireen Khan
              </span>
              {' '}
              <span 
                className="inline-block animate-wave origin-center" 
                style={{ 
                  animation: 'wave 2s ease-in-out infinite',
                  display: 'inline-block',
                }}
              >
                👋
              </span>
            </h1>

            {/* Full-Stack Software Engineer */}
            <div className="flex flex-col gap-6">
              <h2 
                className="text-center text-white xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-black !leading-normal"
              >
                Full-Stack Software Engineer
              </h2>
              <p className="max-w-4xl text-center justify-center text-white xl:text-xl md:text-lg sm:text-sm text-md leading-relaxed">
                Building scalable, user-centric web applications with React.js, Next.js, Angular, and Node.js. 
                From designing intuitive interfaces to architecting robust backend systems, I bring ideas to life 
                with clean, performant code. Passionate about problem-solving and creating innovative digital experiences.
              </p>
            </div>
          </div>

          {/* Location and Availability */}
          <div className="flex flex-col gap-4 items-center">
            <div className="flex gap-2 items-center">
              <MapPin className="w-5 h-5 text-stellar-indigo" />
              <Typography className="text-white">Islamabad, Pakistan</Typography>
            </div>

            <div className="flex items-center gap-2">
              {/* Glowing Dot */}
              <div className="relative flex h-4 w-4 items-center justify-center">
                <span 
                  className="absolute inline-flex h-full w-full rounded-full bg-gradient-to-r from-emerald-400 to-green-500 opacity-75 animate-ping"
                  style={{
                    boxShadow: '0 0 8px rgba(16, 185, 129, 0.6), 0 0 16px rgba(16, 185, 129, 0.4)',
                  }}
                />
                <span 
                  className="relative inline-flex h-3 w-3 rounded-full bg-gradient-to-r from-emerald-400 to-green-500"
                  style={{
                    boxShadow: '0 0 10px rgba(16, 185, 129, 0.8), 0 0 20px rgba(16, 185, 129, 0.5), 0 0 30px rgba(16, 185, 129, 0.3)',
                  }}
                />
              </div>
              <Typography className="text-white font-medium">Available for new projects</Typography>
            </div>
          </div>

          <div className="flex justify-center">
          <SocialIcons />
          </div>

          <button
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView();
            }}
            className="mt-4 px-8 py-3 bg-gradient-to-r from-stellar-indigo via-stellar-purple to-stellar-violet text-white rounded-xl font-semibold flex items-center gap-2 w-fit hover:shadow-lg hover:shadow-stellar-indigo/50 transition-all duration-300 mx-auto"
          >
            <span>Explore My Projects</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
