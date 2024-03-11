import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCameraSlashFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M22.707 2.707a1 1 0 0 0-1.414-1.414l-20 20a1 1 0 1 0 1.414 1.414l20-20ZM16.336 4.836l-.457-.457a3 3 0 0 0-2.122-.879h-3.514a3 3 0 0 0-2.122.879l-.686.686a3 3 0 0 1-1.007.664L3.886 6.746A3 3 0 0 0 2 9.53V17.5c0 .486.116.945.32 1.35l4.792-4.79a5 5 0 0 1 5.947-5.947l3.277-3.277Z"
      fill="currentColor"
    />
    <path
      d="M11.001 10.17a3.008 3.008 0 0 0-1.83 1.831l1.83-1.83ZM6.328 20.5H19a3 3 0 0 0 3-3V9.531a3 3 0 0 0-1.886-2.785l-.022-.01-1.633 1.634a.448.448 0 0 1-.064.822c-.4.134-.715.449-.85.85a.448.448 0 0 1-.822.063l-.393.393a5 5 0 0 1-6.832 6.832l-3.17 3.17Z"
      fill="currentColor"
    />
    <path d="M11 15.83A3 3 0 0 0 14.83 12L11 15.83Z" fill="currentColor" />
  </svg>
)
const Memo = memo(SvgIconCameraSlashFilled)
export default Memo
