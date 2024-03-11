import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconWristwatchOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12.5 10a1 1 0 1 0-2 0v3a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-1v-2Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 6v1.528A5.987 5.987 0 0 1 18 12a5.987 5.987 0 0 1-2 4.472V18a4 4 0 0 1-8 0v-1.528A5.987 5.987 0 0 1 6 12c0-1.778.774-3.375 2-4.472V6a4 4 0 1 1 8 0Zm-6 0a2 2 0 1 1 4 0v.342A5.99 5.99 0 0 0 12 6c-.7 0-1.374.12-2 .342V6Zm2 12c.7 0 1.374-.12 2-.342V18a2 2 0 1 1-4 0v-.342A5.99 5.99 0 0 0 12 18ZM9.6 8.8A3.978 3.978 0 0 1 12 8c.902 0 1.731.297 2.4.8A3.992 3.992 0 0 1 16 12c0 1.308-.627 2.47-1.6 3.2-.669.503-1.498.8-2.4.8a3.978 3.978 0 0 1-2.4-.8A3.992 3.992 0 0 1 8 12c0-1.308.627-2.47 1.6-3.2Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconWristwatchOutline)
export default Memo
