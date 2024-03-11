import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSunCloudFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M13 2a1 1 0 1 0-2 0v1.5a1 1 0 1 0 2 0V2ZM2.474 6.5a1 1 0 0 1 1.366-.366l1.299.75a1 1 0 0 1-1 1.732l-1.3-.75A1 1 0 0 1 2.475 6.5ZM18.86 7.134a1 1 0 1 0 1 1.732l1.299-.75a1 1 0 1 0-1-1.732l-1.3.75ZM19.86 15.134a1 1 0 1 0-1 1.732l1.299.75a1 1 0 1 0 1-1.732l-1.3-.75ZM2 18.353C2 19.815 3.12 21 4.5 21H9c1.657 0 3-1.422 3-3.177 0-1.404-.861-2.596-2.055-3.015C9.665 13.21 8.341 12 6.75 12c-1.795 0-3.25 1.54-3.25 3.441 0 .16.01.317.03.471-.899.401-1.53 1.343-1.53 2.44Z"
      fill="currentColor"
    />
    <path
      d="M18 12a6.003 6.003 0 0 1-4.053 5.677c-.251-1.701-1.358-3.09-2.824-3.621C10.73 11.748 8.877 10 6.65 10c-.105 0-.21.004-.313.012A6 6 0 0 1 18 12Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSunCloudFilled)
export default Memo
