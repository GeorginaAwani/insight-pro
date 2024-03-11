import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMoonStarsFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M14.54 2.326c.422.11.313.76-.111.861C11.365 3.92 9 6.71 9 10a7 7 0 0 0 11.514 5.35c.333-.28.915.019.75.423A10.003 10.003 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2c.878 0 1.73.113 2.54.326Z"
      fill="currentColor"
    />
    <path
      d="M15.343 8.041a1.342 1.342 0 0 0-.85-.849.448.448 0 0 1 0-.849c.402-.133.716-.448.85-.849a.448.448 0 0 1 .85 0c.133.401.447.716.848.85a.448.448 0 0 1 0 .848c-.4.134-.715.449-.849.85a.448.448 0 0 1-.849 0ZM13.494 13.192c.4.134.715.448.849.85a.448.448 0 0 0 .85 0c.133-.402.447-.716.848-.85a.448.448 0 0 0 0-.849 1.343 1.343 0 0 1-.849-.849.448.448 0 0 0-.849 0c-.134.401-.448.716-.85.85a.448.448 0 0 0 0 .848Z"
      fill="current"
    />
  </svg>
)
const Memo = memo(SvgIconMoonStarsFilled)
export default Memo
