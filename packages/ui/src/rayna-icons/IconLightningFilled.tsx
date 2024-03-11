import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconLightningFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M11.044 3.144 6.314 13.74a.5.5 0 0 0 .457.704h4.73a.5.5 0 0 1 .5.5v5.708c0 .54.736.696.956.204l4.73-10.598a.5.5 0 0 0-.457-.703H12.5a.5.5 0 0 1-.5-.5V3.347c0-.54-.736-.696-.956-.203Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconLightningFilled)
export default Memo
