import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconLayerOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5.077 4.693 8l2.676 1.07.004.002L12 10.923l4.627-1.85.004-.002L19.307 8 12 5.077ZM2.79 9.393 4.306 10l-1.518.607c-1.257.503-1.257 2.283 0 2.786L4.307 14l-1.518.607c-1.257.503-1.257 2.283 0 2.786l8.654 3.461a1.5 1.5 0 0 0 1.114 0l8.654-3.461c1.257-.503 1.257-2.283 0-2.786L19.693 14l1.518-.607c1.257-.503 1.257-2.283 0-2.786L19.693 10l1.518-.607c1.257-.503 1.257-2.283 0-2.786l-8.654-3.461a1.5 1.5 0 0 0-1.114 0L2.789 6.607c-1.257.503-1.257 2.283 0 2.786Zm13.837 3.68a.151.151 0 0 1 .004-.002L19.307 12 17 11.077l-4.443 1.777a1.5 1.5 0 0 1-1.114 0L7 11.077 4.693 12l2.677 1.07.003.002L12 14.923l4.627-1.85ZM7 15.076l4.443 1.777a1.5 1.5 0 0 0 1.114 0L17 15.077l2.307.923L12 18.923 4.693 16 7 15.077Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconLayerOutline)
export default Memo
