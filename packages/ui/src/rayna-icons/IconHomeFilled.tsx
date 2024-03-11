import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconHomeFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M10.28 3.204 3.403 8.02a3 3 0 0 0-1.271 2.687l.705 9.166a2 2 0 0 0 2.277 1.826l3.17-.453A2 2 0 0 0 10 19.265V18a2 2 0 0 1 4 0v1.265a2 2 0 0 0 1.717 1.98l3.17.453a2 2 0 0 0 2.276-1.826l.705-9.166A3 3 0 0 0 20.6 8.02L13.72 3.204a3 3 0 0 0-3.44 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconHomeFilled)
export default Memo
