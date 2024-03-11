import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconKeyOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m4.462 18.125.197 1.041c.052.275.183.525.378.72.558.558 1.487.533 2.076-.055l7.515-7.516a2.226 2.226 0 0 1 1.854-.646c1.954.258 3.825-1.152 4.15-3.127l.071-.438c.41-2.495-1.586-4.602-4.092-4.318l-.474.053c-2.097.237-3.608 2.25-3.222 4.291a2.18 2.18 0 0 1-.617 1.935l-1.347 1.347c-.33.33-.73.58-1.167.73l-1.235.424c-.683.235-1.229.78-1.464 1.464a2.371 2.371 0 0 1-1.165 1.338l-.084.043c-1.012.514-1.579 1.634-1.374 2.714Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <circle
      cx={1}
      cy={1}
      r={1}
      transform="scale(1 -1) rotate(-45 -1.525 -22.46)"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconKeyOutline)
export default Memo
