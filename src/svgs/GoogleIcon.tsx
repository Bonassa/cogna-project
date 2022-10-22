
import { SVGAttributes } from "react"

interface GoogleIconProps extends SVGAttributes<HTMLOrSVGElement> {}

export function GoogleIcon(props : GoogleIconProps) {
  return (
    <svg
      width={25}
      height={24}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_6_81)">
        <path
          d="M24.266 12.276c0-.815-.066-1.635-.207-2.438H12.74v4.621h6.482a5.554 5.554 0 01-2.399 3.647v2.998h3.867c2.27-2.09 3.576-5.177 3.576-8.828z"
          fill="#4285F4"
        />
        <path
          d="M12.74 24c3.236 0 5.966-1.062 7.954-2.896l-3.867-2.998c-1.075.731-2.464 1.146-4.083 1.146-3.13 0-5.785-2.112-6.737-4.952h-3.99v3.091a12.002 12.002 0 0010.723 6.61z"
          fill="#34A853"
        />
        <path
          d="M6.003 14.3a7.188 7.188 0 010-4.594V6.615H2.017a12.01 12.01 0 000 10.776l3.986-3.09z"
          fill="#FBBC04"
        />
        <path
          d="M12.74 4.75a6.52 6.52 0 014.603 1.799l3.426-3.426A11.533 11.533 0 0012.74 0 11.998 11.998 0 002.016 6.615l3.987 3.09C6.95 6.863 9.609 4.75 12.74 4.75z"
          fill="#EA4335"
        />
      </g>
      <defs>
        <clipPath id="clip0_6_81">
          <path fill="#fff" transform="translate(.5)" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}