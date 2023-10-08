import { ComponentProps } from "react";

export function PlayIcon({ ...props }: ComponentProps<"svg">) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_664_40113)" filter="url(#filter0_b_664_40113)">
        <path
          d="M19.9999 3.33331C10.7999 3.33331 3.33325 10.8 3.33325 20C3.33325 29.2 10.7999 36.6666 19.9999 36.6666C29.1999 36.6666 36.6666 29.2 36.6666 20C36.6666 10.8 29.1999 3.33331 19.9999 3.33331ZM16.6666 27.5V12.5L26.6666 20L16.6666 27.5Z"
          fill="#072BAD"
          fill-opacity="0.56"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_664_40113"
          x="-12"
          y="-12"
          width="64"
          height="64"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="6" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_664_40113"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_664_40113"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_664_40113">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
