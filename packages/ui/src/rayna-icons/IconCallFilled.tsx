import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCallFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m4.39 4.05.536-.535a3 3 0 0 1 4.242 0l.93.929a3 3 0 0 1 .486 3.604l-.055.096c-.535.94-.533 2.105.102 2.981.316.437.673.89 1.012 1.229.34.339.792.696 1.228 1.012.877.634 2.04.637 2.981.102l.097-.055a3 3 0 0 1 3.604.486l.929.93a3 3 0 0 1 0 4.242l-.536.536c-.562.562-1.329.876-2.102.69-1.654-.398-4.84-1.632-8.676-5.469-3.836-3.836-5.07-7.022-5.468-8.675-.186-.774.127-1.54.69-2.103Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCallFilled)
export default Memo
