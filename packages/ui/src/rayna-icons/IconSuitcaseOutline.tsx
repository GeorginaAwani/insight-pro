import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSuitcaseOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M13 9.722a1 1 0 1 0-2 0v.89a1 1 0 1 0 2 0v-.89Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.933 3a3.668 3.668 0 0 1 3.529 2.667h2.316A3.222 3.222 0 0 1 22 8.889v1.322a1.9 1.9 0 0 1-.972 1.658l-.56 5.534A4 4 0 0 1 16.488 21H7.512a4 4 0 0 1-3.98-3.597l-.56-5.534A1.9 1.9 0 0 1 2 10.211V8.89a3.222 3.222 0 0 1 3.222-3.222h2.316A3.668 3.668 0 0 1 11.067 3h1.866Zm-3.2 2.667A1.664 1.664 0 0 1 11.067 5h1.866c.546 0 1.03.262 1.334.667H9.733ZM4 8.889c0-.675.547-1.222 1.222-1.222h13.556c.675 0 1.222.547 1.222 1.222v1.227a.996.996 0 0 0-.269.065l-6.674 2.472a2 2 0 0 1-.695.125h-.724a2 2 0 0 1-.695-.125L4.27 10.181A.996.996 0 0 0 4 10.116V8.889Zm9.752 5.64 5.192-1.923-.466 4.595A2 2 0 0 1 16.488 19H7.512a2 2 0 0 1-1.99-1.799l-.466-4.595 5.192 1.923a4 4 0 0 0 1.39.249h.724a4 4 0 0 0 1.39-.25Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSuitcaseOutline)
export default Memo
