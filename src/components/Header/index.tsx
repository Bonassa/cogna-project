
import { clsx } from "clsx";
import { ButtonHTMLAttributes, ImgHTMLAttributes } from "react";
import { Text } from '../Text';

interface HeaderRootProps {
  children: React.ReactNode;
  className?: string;
}

interface HeaderImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

interface HeaderLabelProps {
  title: string;
  subtitle?: string;
}

interface HeaderIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

function HeaderRoot({ children, className } : HeaderRootProps){
  return (
    <div className={clsx(
        "bg-gray-600 px-3 py-3 flex flex-row items-center",
        className
      )} 
    >
      { children }
    </div>
  )
}

function HeaderImage({ className, ...rest } : HeaderImageProps){
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

function HeaderLabel({ title, subtitle } : HeaderLabelProps){
  return (
    <div className="flex flex-col gap-1 flex-1 ml-3">
      <Text size="md" className="font-semibold">{ title }</Text>
      {subtitle && (
        <Text size="sm" className="text-gray-300" >{ subtitle }</Text>
      )}
    </div>
  )
}

function HeaderIcon({ children, ...rest } : HeaderIconProps){
  return (
    <button 
      className="text-gray-300"
      { ...rest }
    >
      { children }
    </button>
  )
}

HeaderRoot.displayName = 'Header.Root';
HeaderImage.displayName = 'Header.Image';
HeaderLabel.displayName = 'Header.Label';
HeaderIcon.displayName = 'Header.Icon';

export const Header = {
  Root: HeaderRoot,
  Image: HeaderImage,
  Label: HeaderLabel,
  Icon: HeaderIcon,
}