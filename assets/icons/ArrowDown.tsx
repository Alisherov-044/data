import { ComponentProps } from "react";

export function ArrowDownIcon({ ...props }: ComponentProps<"svg">) {
  return (
    <svg
      width="8"
      height="6"
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.58665 1.19332L3.99999 3.77999L1.41332 1.19332C1.15332 0.933322 0.73332 0.933322 0.47332 1.19332C0.21332 1.45332 0.21332 1.87332 0.47332 2.13332L3.53332 5.19332C3.79332 5.45332 4.21332 5.45332 4.47332 5.19332L7.53332 2.13332C7.79332 1.87332 7.79332 1.45332 7.53332 1.19332C7.27332 0.939988 6.84665 0.933322 6.58665 1.19332Z"
        fill="black"
      ></path>
    </svg>
  );
}
