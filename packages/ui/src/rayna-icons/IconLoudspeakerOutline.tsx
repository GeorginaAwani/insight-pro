import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconLoudspeakerOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M23 3.43a2 2 0 0 0-2.686-1.88l-7.297 2.664-7.329.573A4 4 0 0 0 2 8.775v1.45a4 4 0 0 0 3.688 3.988l.413.033.703 6.113a2.982 2.982 0 1 0 5.924-.695l-.59-4.946.879.068 7.297 2.663A2 2 0 0 0 23 15.571V3.429ZM5.844 6.78l6.387-.499v6.438l-6.387-.5A2 2 0 0 1 4 10.225v-1.45A2 2 0 0 1 5.844 6.78ZM21 15.57l-6.77-2.47V5.9L21 3.43v12.14ZM8.791 20.13l-.659-5.726 1.972.155.638 5.342a.982.982 0 1 1-1.95.23Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconLoudspeakerOutline)
export default Memo
