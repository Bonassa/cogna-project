
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx';
import { ButtonHTMLAttributes } from 'react';

interface ButtonRootProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  secondary?: boolean;
}

interface ButtonLabelProps {
  value: string;
  className?: string;
}

interface ButtonIconProps {
  children: React.ReactNode;
}

function ButtonRoot({ children, className, secondary = false, ...rest } : ButtonRootProps){
  return (
    <button className={clsx(
        'h-12 flex items-center justify-center rounded transition-colors duration-300 gap-2',
        {
          'bg-purple-500 hover:bg-purple-600' : secondary === false,
          'bg-transparent hover:bg-white border-2 border-white group': secondary === true
        },
        className
      )} 
      {...rest}
    >
      { children }
    </button>
  )
}

function ButtonLabel({ value, className } : ButtonLabelProps){
  return (
    <span className={clsx(
      'font-sans, text-sm font-semibold text-gray-100 leading-4 group-hover:text-gray-900',
      className
    )} >
      { value }
    </span>
  ) 
}

function ButtonIcon({ children } : ButtonIconProps){
  return (
    <Slot>
      { children }
    </Slot>
  )
}

ButtonRoot.displayName = 'Button.Root';
ButtonLabel.displayName = 'Button.Label';
ButtonIcon.displayName = 'Button.Icon';

export const Button = {
  Root: ButtonRoot,
  Label: ButtonLabel,
  Icon: ButtonIcon
}