import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconHexagon01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M11.223 2.432c.284-.158.425-.237.575-.268a1 1 0 0 1 .403 0c.15.031.292.11.576.268l7.4 4.11c.3.167.45.25.558.369a1 1 0 0 1 .215.364c.05.152.05.324.05.666v8.118c0 .342 0 .514-.05.666a1 1 0 0 1-.215.364c-.109.119-.258.202-.558.368l-7.4 4.111c-.284.158-.425.237-.575.267a.998.998 0 0 1-.403 0c-.15-.03-.292-.11-.576-.267l-7.4-4.11c-.3-.167-.45-.25-.558-.369a1 1 0 0 1-.215-.364C3 16.573 3 16.401 3 16.06V7.94c0-.342 0-.514.05-.666a1 1 0 0 1 .215-.364c.109-.119.258-.202.558-.368l7.4-4.111Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Memo = memo(SvgIconHexagon01)
export default Memo
