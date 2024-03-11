import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBrushOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1a2.5 2.5 0 0 0-2.5 2.5V6a1 1 0 0 1-1 1H6a3 3 0 0 0-3 3v3.938l-.712 5.69A3 3 0 0 0 5.265 23h13.469a3 3 0 0 0 2.977-3.372L21 13.938V10a3 3 0 0 0-3-3h-2.5a1 1 0 0 1-1-1V3.5A2.5 2.5 0 0 0 12 1ZM4.272 19.876 4.883 15h14.234l.61 4.876A1 1 0 0 1 18.733 21h-1.867l-.378-2.641a1 1 0 1 0-1.98.282L14.848 21H5.264a1 1 0 0 1-.992-1.124ZM18 9a1 1 0 0 1 1 1v3H5v-3a1 1 0 0 1 1-1h2.5a3 3 0 0 0 3-3V3.5a.5.5 0 0 1 1 0V6a3 3 0 0 0 3 3H18Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBrushOutline)
export default Memo
