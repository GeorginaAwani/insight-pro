import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCameraFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M12 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.243 3.5h3.514a3 3 0 0 1 2.122.879l.686.686a3 3 0 0 0 1.007.664l2.542 1.017A3 3 0 0 1 22 9.53V17.5a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9.531a3 3 0 0 1 1.886-2.785l2.542-1.017a3 3 0 0 0 1.007-.664l.686-.686a3 3 0 0 1 2.122-.879ZM7 13a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm8.848-3.808c.4.134.715.449.849.85a.448.448 0 0 0 .849 0c.134-.401.448-.716.849-.85a.448.448 0 0 0 0-.849 1.343 1.343 0 0 1-.85-.849.448.448 0 0 0-.848 0c-.134.401-.448.716-.85.85a.447.447 0 0 0 0 .848Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCameraFilled)
export default Memo
