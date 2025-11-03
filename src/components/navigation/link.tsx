import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { mergeClasses } from '@/lib/utils';

interface LinkProps extends NextLinkProps {
  className?: string;
  children?: React.ReactNode;
  noCustomization?: boolean;
  externalLink?: boolean;
  withUnderline?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      noCustomization,
      children = null,
      className = '',
      externalLink = false,
      withUnderline = false,
      ...props
    }: LinkProps,
    ref
  ) => {
    return (
      <NextLink {...props} passHref legacyBehavior>
      <a
        target={externalLink ? '_blank' : '_self'}
        ref={ref}
        className={mergeClasses(
          noCustomization
            ? ''
            : 'text-base font-medium text-gray-700 transition-all hover:text-stellar-indigo active:text-gray-600 glow-on-hover',
          withUnderline
            ? 'underline underline-offset-4 transition-all hover:text-stellar-indigo active:text-gray-600'
            : '',
          className
        )}
      >
        {children}
      </a>
    </NextLink>
    );
  }
);

Link.displayName = 'Link';

export default Link;
