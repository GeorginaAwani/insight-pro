import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconImageCrossFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M3 7a2 2 0 0 1 2-2h11a1 1 0 1 0 0-2H5a4 4 0 0 0-4 4v11a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-8a1 1 0 1 0-2 0v6.25l-4.437-5.546a3 3 0 0 0-4.839.21L10 13.5l-.661-.516a2 2 0 0 0-2.697.613l-2.81 4.255a2 2 0 0 0-.332 1.102V19c0 .122.011.242.032.358A1.993 1.993 0 0 1 3 18V7Z"
      fill="currentColor"
    />
    <path
      d="M5.183 8.798c.481.16.859.538 1.019 1.02.163.489.856.489 1.019 0 .16-.482.538-.86 1.019-1.02a.537.537 0 0 0 0-1.019A1.611 1.611 0 0 1 7.22 6.76a.537.537 0 0 0-1.018 0c-.16.481-.538.859-1.019 1.02a.537.537 0 0 0 0 1.018ZM22.243 5.828l.707-.707a1 1 0 0 0-1.415-1.414l-.707.707-.707-.707a1 1 0 0 0-1.414 1.414l.707.707-.707.708a1 1 0 0 0 1.414 1.414l.707-.707.707.707a1 1 0 1 0 1.415-1.414l-.707-.708Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconImageCrossFilled)
export default Memo
