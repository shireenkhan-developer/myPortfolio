import Container from '@/components/layout/container';
import SectionHeading from '@/components/general/section-heading';
import Image from 'next/image';
import { MapPin, Award, Calendar } from 'lucide-react';

const EducationSection = () => {
  return (
    <Container id="education"
      style={{
        background: 'linear-gradient(to bottom, #25153d 0%, #2d1b47 50%, #35214e 100%)',
      }}
    >
      {/* Section Heading */}
      <div className="flex flex-col items-center gap-6 relative z-10 mb-8 md:mb-10">
        <div className="relative w-full flex flex-col items-center">
          <div className="w-24 h-px bg-white/30 mb-6"></div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center tracking-tight text-white">
            Education
          </h2>
          <div className="w-32 h-px bg-white/30 mt-6"></div>
        </div>
        <p className="max-w-2xl text-center text-white/90 mt-2 text-lg md:text-xl mb-4">
          My academic journey and achievements:
        </p>
      </div>

      {/* Education Card */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div 
          className="relative overflow-hidden rounded-xl backdrop-blur-lg p-8 md:p-12 transition-all duration-300 hover:border-stellar-indigo/50 hover:shadow-2xl hover:shadow-stellar-indigo/20"
          style={{
            background: 'rgba(30, 27, 75, 0.6)',
            border: '1px solid rgba(79, 70, 229, 0.3)',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(79, 70, 229, 0.1)',
          }}
        >
          <div className="relative z-10 space-y-6">
            {/* University Name & Location */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-full bg-white p-2 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/logos/logo-nust.png"
                    alt="NUST Logo"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <h3 
                    className="text-2xl md:text-3xl font-bold mb-2"
                    style={{
                      background: 'linear-gradient(135deg, #ffffff 0%, rgba(79, 70, 229, 1) 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    National University of Sciences and Technology (NUST)
                  </h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm md:text-base">
                    <MapPin className="w-4 h-4" />
                    <span>Islamabad, Pakistan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Degree & Duration */}
            <div className="space-y-4 pl-4 md:pl-12">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-white/20 rounded-full" />
                <div>
                  <h4 className="text-xl md:text-2xl font-semibold text-white mb-1">
                    Bachelor of Engineering in Software Engineering
                  </h4>
                  <div className="flex items-center gap-4 flex-wrap text-white/70 text-sm md:text-base">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Sep 2019 – Jun 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="space-y-4 pl-4 md:pl-12 pt-4">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 flex-wrap">
                {/* CGPA */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-md border border-white/20 bg-white/5 backdrop-blur-sm">
                  <span className="text-lg md:text-xl font-semibold text-white">3.74</span>
                  <span className="text-sm md:text-base text-white/70">CGPA</span>
                </div>

                {/* Gold Medal */}
                <div className="flex items-center gap-3 px-5 py-2.5 rounded-lg bg-yellow-500/10 border border-yellow-500/20 backdrop-blur-sm">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <div className="text-white text-sm md:text-base font-medium">
                    Rector&apos;s Gold Medal
                  </div>
                </div>
              </div>

              {/* Medal Description */}
              <div className="mt-3 pl-4">
                <p className="text-white/60 text-sm md:text-base italic">
                  Best Final Year Project (Software Dept.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EducationSection;

