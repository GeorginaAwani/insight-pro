import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBookOpenFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 5.57v9.605c0 .497-.305.942-.765 1.128-.955.386-2.6 1.078-3.735 1.697-1.854 1.011-4.5 2-4.5 2s-2.646-.989-4.5-2c-1.136-.62-2.78-1.31-3.735-1.697A1.22 1.22 0 0 1 3 15.175V5.57c0-.79.75-1.362 1.506-1.13.93.287 2.111.677 2.994 1.061C9.343 6.302 12 8 12 8s2.657-1.698 4.5-2.5c.883-.384 2.064-.774 2.994-1.06A1.167 1.167 0 0 1 21 5.57Zm-2.106 3.983a1 1 0 0 1-.447 1.341l-3 1.5a1 1 0 1 1-.894-1.788l3-1.5a1 1 0 0 1 1.341.447ZM5.553 10.894a1 1 0 1 1 .894-1.788l3 1.5a1 1 0 1 1-.894 1.788l-3-1.5Zm13.341 1.659a1 1 0 0 1-.447 1.341l-3 1.5a1 1 0 1 1-.894-1.788l3-1.5a1 1 0 0 1 1.341.447ZM5.553 13.894a1 1 0 1 1 .894-1.788l3 1.5a1 1 0 1 1-.894 1.788l-3-1.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBookOpenFilled)
export default Memo
