import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconKeyFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="m4.658 19.166-.197-1.04c-.204-1.081.363-2.201 1.374-2.715l.085-.043a2.37 2.37 0 0 0 1.165-1.338c.235-.683.78-1.229 1.464-1.464l1.234-.423c.437-.15.837-.4 1.167-.73l1.348-1.348a2.18 2.18 0 0 0 .617-1.935c-.386-2.04 1.125-4.054 3.221-4.29l.475-.054c2.506-.284 4.502 1.823 4.092 4.318l-.072.438c-.325 1.975-2.195 3.385-4.15 3.127a2.226 2.226 0 0 0-1.853.646l-7.516 7.516c-.588.588-1.518.613-2.076.055a1.376 1.376 0 0 1-.378-.72ZM17.556 6.95a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconKeyFilled)
export default Memo
