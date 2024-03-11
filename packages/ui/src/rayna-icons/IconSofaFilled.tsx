import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSofaFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.499 15A2.5 2.5 0 0 1 2 12.5v-1a2.5 2.5 0 0 1 5-.002V8a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3.499a2.5 2.5 0 0 1 5 .001v1a2.5 2.5 0 0 1-5 .001V14a1 1 0 0 1-1 1h5a1 1 0 0 1 1 1v1.6a1 1 0 0 1-1 1v.4a1 1 0 1 1-2 0v-.4H5v.4a1 1 0 1 1-2 0v-.4a1 1 0 0 1-1-1V16a1 1 0 0 1 1-1h1.499ZM8 15a1 1 0 0 1-1-1v-1.498A2.5 2.5 0 0 1 4.501 15H8Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSofaFilled)
export default Memo
