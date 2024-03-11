import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCartFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M3.69 2a1 1 0 0 0 0 2c.728 0 1.364.53 1.495 1.274l.686 3.9c.006.033.014.066.023.098l.202 1.131c.566 3.162.849 4.742 1.827 5.827.363.403.788.748 1.261 1.025C10.46 18 12.122 18 15.448 18h.406c1.503 0 2.254 0 2.873-.264.502-.214.94-.55 1.269-.974.405-.522.573-1.228.91-2.64.51-2.134.764-3.2.468-4.035a3.11 3.11 0 0 0-1.34-1.621C19.259 8 18.125 8 15.855 8H7.696l-.541-3.073A3.527 3.527 0 0 0 3.689 2ZM10.5 20.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM18.25 22a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCartFilled)
export default Memo
