
import { clsx } from "clsx";
import { ImgHTMLAttributes, HTMLAttributes } from "react";
import { Text } from '../Text';

interface ChatCardRootProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

interface ChatCardImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

interface ChatCardLabelProps {
  title: string;
  subtitle?: string;
}

function ChatCardRoot({ children, className, ...rest } : ChatCardRootProps){
  return (
    <div
      { ...rest } 
      className={clsx(
        "bg-transparent px-3 py-3 flex flex-row items-center hover:bg-gray-600 cursor-pointer",
        className
      )} 
    >
      { children }
    </div>
  )
}

function ChatCardImage({ className, ...rest } : ChatCardImageProps){
  return (
    <img 
      className={clsx(
          "h-[50px] w-[50px] rounded-full object-cover",
          className
        )}
      { ...rest }
    />
  )
}

function ChatCardLabel({ title, subtitle } : ChatCardLabelProps){
  return (
    <div className="flex flex-col gap-1 flex-1 ml-3">
      <Text size="md" className="font-semibold">{ title }</Text>
      {subtitle && (
        <Text size="sm" className="text-gray-300" >{ subtitle }</Text>
      )}
    </div>
  )
}

ChatCardRoot.displayName = 'ChatCard.Root';
ChatCardImage.displayName = 'ChatCard.Image';
ChatCardLabel.displayName = 'ChatCard.Label';

export const ChatCard = {
  Root: ChatCardRoot,
  Image: ChatCardImage,
  Label: ChatCardLabel,
}