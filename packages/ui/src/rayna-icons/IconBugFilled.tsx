import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBugFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M8.272 4.91 8.25 5h7.5l-.022-.09a3.842 3.842 0 0 0-7.456 0ZM19 12v-1.634c.074-.043.144-.096.207-.159l2-2a1 1 0 0 0-1.414-1.414L18.76 7.825A3 3 0 0 0 16 6H8a3 3 0 0 0-2.761 1.825L4.207 6.793a1 1 0 0 0-1.414 1.414l2 2c.063.063.133.116.207.16V12H2.5a1 1 0 1 0 0 2H5c.024 0 .047 0 .07-.002a6.95 6.95 0 0 0 .576 1.942l-1.853 1.853a1 1 0 1 0 1.414 1.414l1.559-1.559A6.983 6.983 0 0 0 12 20a6.983 6.983 0 0 0 5.234-2.352l1.559 1.56a1 1 0 0 0 1.414-1.415l-1.853-1.853c.281-.605.478-1.258.576-1.942L19 14h1.5a1 1 0 1 0 0-2H19Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBugFilled)
export default Memo
