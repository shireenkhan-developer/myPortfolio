import { Copyright } from 'lucide-react';

import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="w-full bg-cosmic-100/40 backdrop-blur-xl border-t border-stellar-indigo/20 py-6 shadow-[0_-10px_30px_rgba(79,70,229,0.1)]">
      <div className="flex items-center justify-center gap-1">
        <Typography className="flex items-center text-gray-700" variant="body3">
          <Copyright className="mr-1 inline-block h-4 w-4 text-stellar-indigo" />
          2025 | coded with ❤️ by Shireen Khan | All rights reserved
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
