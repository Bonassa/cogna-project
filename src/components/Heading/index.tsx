
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function Heading({ children, asChild = false, size = 'md', className } : HeadingProps){
  const Component = asChild ? Slot : 'h2';
  
  return (
    <Component className={clsx(
      'text-gray-100 font-sans',
      {
        'text-lg' : size === 'sm', 
        'text-xl' : size === 'md',
        'text-2xl' : size === 'lg',
      },
      className
    )} >
      {children}
    </Component>
  )
}