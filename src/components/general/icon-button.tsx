import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { mergeClasses } from '@/lib/utils';

const iconButtonVariants = cva(
  'flex justify-center items-center hover:bg-stellar-indigo/10 active:bg-stellar-indigo/20 rounded-lg p-1.5 transition-all duration-200 [&_svg]:stroke-gray-700 [&_svg]:hover:stroke-stellar-indigo border border-transparent hover:border-stellar-indigo/30 hover:shadow-md hover:shadow-stellar-indigo/20',
  {
    variants: {
      size: {
        md: '[&_svg]:w-6 [&_svg]:h-6',
        lg: '[&_svg]:w-8 [&_svg]:h-8',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
  showTooltip?: boolean;
  tooltipText?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      size,
      asChild = false,
      showTooltip = false,
      tooltipText = '',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={mergeClasses(
          'relative',
          iconButtonVariants({ size }),
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        {showTooltip && tooltipText.length > 0 && (
          <span className="absolute -top-8 rounded-lg bg-cosmic-100/95 backdrop-blur-md border border-stellar-indigo/40 px-2 py-1 text-sm text-stellar-indigo shadow-lg shadow-stellar-indigo/30">
            {tooltipText}
          </span>
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export default IconButton;
