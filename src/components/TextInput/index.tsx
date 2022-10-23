
import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface TextInputRootProps {
  children: ReactNode;
  className?: string;
}

export interface TextInputIconProps {
  children: ReactNode;
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {} 


function TextInputRoot({ children, className } : TextInputRootProps) {
  return (
    <div 
      className={clsx(
        'flex items-center gap-3 py-4 px-4 h-12 bg-gray-800 rounded w-full focus-within:ring-2 ring-purple-500',
        className
      )}
    >
      { children }
    </div>
  );
}

function TextInputIcon(props : TextInputIconProps) {
  return (
    <Slot className='h-6 w-6 text-gray-500' >
      { props.children }
    </Slot>
  );
}

function TextInputInput(props : TextInputInputProps) {
  return (
    <input 
      className='bg-transparent h-12 flex-1 outline-none text-gray-100 placeholder:text-gray-500 text-xs'
      {...props}
    />
  );
}

TextInputRoot.displayName = 'TextInput.Root';
TextInputIcon.displayName = 'TextInput.Icon';
TextInputInput.displayName = 'TextInput.Input';

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}