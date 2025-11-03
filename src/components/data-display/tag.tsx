import * as React from 'react';

import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ label, className, ...props }: TagProps, ref) => {
    return (
      <div
        className={mergeClasses(
          'flex items-center justify-center rounded-xl bg-gradient-to-r from-stellar-indigo/30 to-stellar-purple/30 backdrop-blur-sm px-5 py-1.5 border-2 border-stellar-indigo/50 shadow-md shadow-stellar-indigo/30 transition-all duration-300 hover:shadow-lg hover:shadow-stellar-indigo/50 hover:border-stellar-indigo/70 hover:scale-105',
          className
        )}
        {...props}
      >
        <Typography variant="body3" className="font-semibold text-white drop-shadow-[0_0_8px_rgba(79,70,229,0.6)]">
          {label}
        </Typography>
      </div>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;
