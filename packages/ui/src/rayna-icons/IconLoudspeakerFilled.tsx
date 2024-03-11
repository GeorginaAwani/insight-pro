import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconLoudspeakerFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M20.829 2.96a.5.5 0 0 1 .671.47v12.14a.5.5 0 0 1-.671.47l-7.098-2.59v-7.9l7.098-2.59ZM12.73 5.74v7.52l-6.925-.542A2.5 2.5 0 0 1 3.5 10.225v-1.45a2.5 2.5 0 0 1 2.305-2.493l6.926-.541ZM8.295 20.187l-.729-6.328 2.986.233.687 5.75a1.482 1.482 0 1 1-2.944.345Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconLoudspeakerFilled)
export default Memo
