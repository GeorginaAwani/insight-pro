import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCameraOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 13a5 5 0 1 1 10 0 5 5 0 0 1-10 0Zm5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
      fill="currentColor"
    />
    <path
      d="M15.848 9.192c.4.134.715.449.849.85a.448.448 0 0 0 .849 0c.134-.401.448-.716.849-.85a.448.448 0 0 0 0-.849 1.343 1.343 0 0 1-.85-.849.448.448 0 0 0-.848 0c-.134.401-.448.716-.85.85a.447.447 0 0 0 0 .848Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.414 3.672A4 4 0 0 1 10.243 2.5h3.514a4 4 0 0 1 2.829 1.172l.686.685a2 2 0 0 0 .671.443l2.543 1.017A4 4 0 0 1 23 9.531V17.5a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4V9.531a4 4 0 0 1 2.514-3.714L6.057 4.8a2 2 0 0 0 .671-.443l.686-.685Zm2.829.828a2 2 0 0 0-1.415.586l-.685.686a4 4 0 0 1-1.343.885L4.257 7.674A2 2 0 0 0 3 9.531V17.5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9.531a2 2 0 0 0-1.257-1.857L17.2 6.657a4 4 0 0 1-1.342-.885l-.686-.686a2 2 0 0 0-1.415-.586h-3.514Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCameraOutline)
export default Memo
