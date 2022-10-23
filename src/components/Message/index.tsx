
import { clsx } from 'clsx';
import { Text } from '../Text';

interface MessageProps {
  text: string;
  sender?: boolean;
}

export function Message({ text, sender = false } : MessageProps){
  return (
    <div className={clsx(
      'py-4 pr-6 pl-4 max-w-[60%] text-justify',
      {
        'bg-gray-600' : sender === false,
        'bg-purple-500' : sender === true
      }
    )}>
      <Text>{ text }</Text>
    </div>
  )
}