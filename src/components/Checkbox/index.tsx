
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { clsx } from 'clsx';
import { Check } from 'phosphor-react';

export interface CheckBoxProps extends CheckboxPrimitive.CheckboxProps {}

export function Checkbox(props : CheckBoxProps){
  return(
    <CheckboxPrimitive.Root 
      {...props}
      className={clsx(
        'flex items-center justify-center h-6 w-6 rounded bg-gray-800',
        {
          '!bg-purple-500' : props.checked === true
        }
      )}
    >
      <CheckboxPrimitive.Indicator>
        <Check weight='bold' size={20} className='text-gray-100' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}