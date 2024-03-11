import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPaintBrushFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M21.209 3.204c-.945 3.365-6.003 9.245-9.048 12.437-1.144-1.282-2.636-2.845-4.177-4.213 3.315-3.025 9.327-7.983 12.404-9.015.523-.176.97.259.821.79ZM7.732 19.804c.944-.596 2.027-1.28 3.195-1.915.454-.247.585-.845.248-1.238-1.08-1.26-2.847-3.16-4.57-4.54a.925.925 0 0 0-.963-.123c-2.553 1.174-2.387 2.523-1.86 6.797.08.653.168 1.375.257 2.174.122 1.099 1.555.195 3.693-1.155Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPaintBrushFilled)
export default Memo
