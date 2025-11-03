'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

import { mergeClasses } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={mergeClasses(
          'inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-stellar-indigo via-stellar-purple to-stellar-violet px-4 py-1.5 font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-stellar-indigo/40 hover:scale-105 active:scale-95 border border-stellar-indigo/30',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
