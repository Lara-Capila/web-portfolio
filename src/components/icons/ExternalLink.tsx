import type { SVGProps } from "react";

export function HugeiconsExternalLink(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21.001 12A9 9 0 0 1 12 21a9.001 9.001 0 1 1 0-18m8.554.469L14.99 9.01m5.564-5.541c-.495-.495-3.832-.45-4.537-.44m4.537.44c.495.495.449 3.83.439 4.536"
        color="currentColor"
      ></path>
    </svg>
  );
}
