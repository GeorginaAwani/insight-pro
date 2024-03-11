import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconFirstAidOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M13 9.25a1 1 0 1 0-2 0 1 1 0 1 0 0 2 1 1 0 1 0 2 0 1 1 0 1 0 0-2Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 10.211a1.9 1.9 0 0 0 .972 1.658l.56 5.534A4 4 0 0 0 7.512 21h8.976a4 4 0 0 0 3.98-3.597l.56-5.534A1.9 1.9 0 0 0 22 10.211V8.89a3.222 3.222 0 0 0-3.222-3.222h-2.316A3.668 3.668 0 0 0 12.933 3h-1.866a3.668 3.668 0 0 0-3.529 2.667H5.222A3.222 3.222 0 0 0 2 8.889v1.322Zm3.222-2.544C4.547 7.667 4 8.214 4 8.889v1.227c.094.01.184.032.269.065l6.674 2.472a2 2 0 0 0 .695.125h.724a2 2 0 0 0 .695-.125l6.674-2.472a.996.996 0 0 1 .269-.065V8.889c0-.675-.547-1.222-1.222-1.222H5.222Zm.3 9.534-.466-4.595 5.192 1.923a4 4 0 0 0 1.39.249h.724a4 4 0 0 0 1.39-.25l5.192-1.922-.466 4.595A2 2 0 0 1 16.488 19H7.512a2 2 0 0 1-1.99-1.799ZM12.933 5c.546 0 1.03.262 1.334.667H9.733A1.664 1.664 0 0 1 11.067 5h1.866Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconFirstAidOutline)
export default Memo
