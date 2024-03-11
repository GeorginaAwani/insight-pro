import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCupFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3 5.5v12a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3h.683A4.317 4.317 0 0 0 23 13.183v-2.321c0-1.876-1.446-3.097-2.81-3.539-.696-.226-1.473-.291-2.19-.104V5.5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Zm15 4.396V15.5h.683A2.317 2.317 0 0 0 21 13.183v-2.321c0-.71-.564-1.357-1.426-1.636-.413-.134-.797-.144-1.073-.07-.255.067-.392.191-.466.363-.015.034-.035.118-.035.377Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCupFilled)
export default Memo
