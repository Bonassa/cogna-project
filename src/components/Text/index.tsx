
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

interface TextProps {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  size?: 'xsm' | 'sm' | 'md' | 'lg';
}

export function Text({ children, asChild = false, size = 'md', className } : TextProps){
  const Component = asChild ? Slot : 'span';
  
  return (
    <Component className={clsx(
      'text-gray-100 font-sans',
      {
        'text-2xs' : size === 'xsm',
        'text-xs' : size === 'sm', 
        'text-sm' : size === 'md',
        'text-md' : size === 'lg',
      },
      className
    )} >
      {children}
    </Component>
  )
}