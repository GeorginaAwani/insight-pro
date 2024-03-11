import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconConicalFlaskFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M7.56 2h8.882l-.677 2.156a5.998 5.998 0 0 0-.274 1.728l-.031 2.704a6 6 0 0 0 .753 2.98l4.14 7.462c.74 1.333-.225 2.97-1.749 2.97H5.397c-1.524 0-2.488-1.637-1.748-2.97l4.382-7.9c.184-.331.321-.684.41-1.048.039.004.078.007.119.007H11a1 1 0 1 0 0-2H9.56V7H11a1 1 0 1 0 0-2H8.56c-.027 0-.053.001-.08.003a6 6 0 0 0-.228-.927L7.56 2Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconConicalFlaskFilled)
export default Memo
