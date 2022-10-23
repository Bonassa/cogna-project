
import { clsx } from 'clsx';
import { Text } from '../Text';

interface MessageProps {
  text: string;
  sender?: boolean;
}

export function Message({ text, sender = false } : MessageProps){
  return (
    <div className={clsx(
      'flex flex-row ml-8 mr-[5rem]',
      {
        'justify-start': sender === false,
        'justify-end': sender === true,
      }
    )}>
      <div className={clsx(
        'py-4 pr-6 pl-4 max-w-[60%] h-fit w-fit text-justify rounded-xl',
        {
          'bg-gray-600 rounded-tl-none' : sender === false,
          'bg-purple-500 rounded-tr-none' : sender === true
        }
      )}>
        <Text size='sm'>{ text }</Text>
      </div>
    </div>
  )
}