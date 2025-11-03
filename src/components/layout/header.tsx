'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from '@/components/navigation/drawer';
import { NAV_LINKS } from '@/lib/data';
import { mergeClasses } from '@/lib/utils';
import useWindowSize from '@/hooks/use-window-size';
import useScroll from '@/hooks/use-scroll';
import useActiveSection from '@/hooks/use-active-section';
import Link from '@/components/navigation/link';
import IconButton from '@/components/general/icon-button';
import DownloadCV from '@/components/general/download-cv';
import Typography from '@/components/general/typography';

const Logo = () => (
  <Typography variant="h3" className="font-bold bg-gradient-to-r from-stellar-indigo via-stellar-purple to-stellar-violet bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(79,70,229,0.5)]">
    {'<SK />'}
  </Typography>
);

const Header = () => {
  const scrolled = useScroll(40);
  const activeSection = useActiveSection();
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();

  // close sidebar if open in screen size < 768px
  useEffect(() => {
    if (size?.width && size?.width > 767 && isOpen) {
      setIsOpen(false);
    }
  }, [size, isOpen]);

  return (
    <header
      className={mergeClasses(
        'sticky top-0 z-30 w-full border-b border-transparent bg-cosmic-100/30 backdrop-blur-lg max-md:border-stellar-indigo/20',
        scrolled ? 'bg-cosmic-100/60 backdrop-blur-xl md:border-stellar-indigo/30 shadow-lg shadow-stellar-indigo/10' : ''
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-4 md:px-8">
        <Link href="/" noCustomization>
          <Logo />
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex list-none items-center gap-6">
            {NAV_LINKS.map((link, index) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className={mergeClasses(
                      'relative px-3 py-1 rounded-lg transition-all duration-300 text-white/90',
                      isActive 
                        ? 'text-white font-semibold' 
                        : 'hover:text-white'
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/50 rounded-full"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="h-6 w-0.5 bg-white/30"></div>
          <div className="flex items-center gap-4">
            <DownloadCV />
          </div>
        </div>

        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger asChild className="flex md:hidden">
            <IconButton>
              <Menu />
            </IconButton>
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex items-center justify-between border-b border-stellar-indigo/20 p-4">
              <Logo />
              <DrawerClose asChild>
                <IconButton>
                  <X />
                </IconButton>
              </DrawerClose>
            </div>
            <div className="border-b border-white/20 p-4">
              <ul className="flex list-none flex-col gap-4">
                {NAV_LINKS.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-white/90 hover:text-white transition-colors"
                      onClick={() => {
                        const timeoutId = setTimeout(() => {
                          setIsOpen(false);
                          clearTimeout(timeoutId);
                        }, 500);
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4 p-4">
              <DownloadCV />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
