import { mergeClasses } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={mergeClasses(
        'rounded-xl bg-gradient-to-br from-cosmic-50/90 to-cosmic-100/90 backdrop-blur-sm shadow-xl border-2 border-stellar-indigo/40 relative transition-all duration-300 hover:shadow-2xl hover:shadow-stellar-indigo/30 hover:border-stellar-indigo/60',
        className
      )}
      style={{
        background: 'linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(15, 15, 31, 0.95) 100%)',
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
