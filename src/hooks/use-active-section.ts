import { useEffect, useState } from 'react';

const sections = ['hero', 'about', 'education', 'experience', 'projects', 'contact'];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Check sections from bottom to top to get the most appropriate active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionBottom - 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }

      // If at the very top, set hero as active
      if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };

    // Use throttled scroll for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  return activeSection;
}

