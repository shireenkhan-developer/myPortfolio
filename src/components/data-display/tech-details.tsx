'use client';

import { TechDetails } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import ImageWrapper from '@/components/data-display/image-wrapper';

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetails) => {
  // Adjust icon sizes for MongoDB and N8N to align labels properly
  const isMongoDB = label === 'MongoDB';
  const isN8N = label === 'N8N';
  
  let iconSize = 64;
  let scaleClass = '';
  
  if (isMongoDB) {
    iconSize = 35;
    scaleClass = '';
  } else if (isN8N) {
    iconSize = 70;
    scaleClass = 'scale-110';
  }
  
  return (
    <div className="flex flex-col items-center gap-2">
      <Link noCustomization href={url} externalLink>
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={label}
          width={iconSize}
          height={iconSize}
          className={`transition-transform duration-300 md:hover:scale-110 ${scaleClass}`}
          style={{ height: 'auto' }}
        />
      </Link>
      <Typography variant="body1">{label}</Typography>
    </div>
  );
};

export default TechDetails;
