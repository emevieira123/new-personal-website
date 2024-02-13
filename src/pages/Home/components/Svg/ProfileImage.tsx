import { SVGProps } from "react";

export function ProfileImage(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={props.width ?? 1799}
      height={props.height ?? 1799}
      viewBox="0 0 1799 1799"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <g filter="url(#filter0_f_764_2789)">
        <rect
          x={899.312}
          y={59}
          width={1188.38}
          height={1188.38}
          rx={100}
          transform="rotate(45 899.312 59)"
          fill={props.color ?? "currentColor"}
        />
        <rect
          x={899.312}
          y={63.2426}
          width={1182.38}
          height={1182.38}
          rx={97}
          transform="rotate(45 899.312 63.243)"
          stroke={props.color ?? "currentColor"}
          strokeWidth={6}
        />
      </g>
      <rect
        x={899.312}
        y={63.2426}
        width={1182.38}
        height={1182.38}
        rx={97}
        transform="rotate(45 899.312 63.243)"
        fill={props.color ?? "currentColor"}
        stroke={props.color ?? "currentColor"}
        strokeWidth={6}
      />
      <rect
        x={899.312}
        y={63.2426}
        width={1182.38}
        height={1182.38}
        rx={97}
        transform="rotate(45 899.312 63.243)"
        fill="url(#pattern0)"
        stroke={props.color ?? "currentColor"}
        strokeWidth={6}
      />
      <defs>
        <filter
          id="filter0_f_764_2789"
          x={0.421875}
          y={0.421875}
          width={1797.78}
          height={1797.78}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={50}
            result="effect1_foregroundBlur_764_2789"
          />
        </filter>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use
            xlinkHref="#image0_764_2789"
            transform="rotate(-44.626 .303 .562) scale(.00118)"
          />
        </pattern>
        <image
          id="image0_764_2789"
          width={950}
          height={1280}
        />
      </defs>
    </svg>
  );
}