'use client';

import { useEffect, useState } from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';
import { useTheme } from 'next-themes';

type ImageWrapperProps = ImageProps & {
  srcForDarkMode?: string | StaticImageData;
};

const ImageWrapper = ({
  srcForDarkMode,
  src,
  alt,
  style,
  ...props
}: ImageWrapperProps) => {
  // Ref :: https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const finalSrc = theme === 'dark' ? srcForDarkMode || src : src;

  // Ensure aspect ratio is maintained when width/height are provided
  // If style is provided, merge it; otherwise ensure height: auto for proper aspect ratio
  const imageStyle = props.width && props.height && !style?.height
    ? { ...style, height: 'auto' }
    : style;

  return <Image src={finalSrc!} alt={alt} style={imageStyle} {...props} />;
};

export default ImageWrapper;
