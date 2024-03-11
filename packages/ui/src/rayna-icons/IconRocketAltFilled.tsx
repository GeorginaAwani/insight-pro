import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconRocketAltFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.396 11.178C15.37 1.573 19.511 2.45 20.86 3.024c.574 1.348 1.452 5.49-8.153 14.463-.327-4.568-1.74-5.983-6.31-6.31ZM17.33 8.676a1.5 1.5 0 1 1-2.12-2.121 1.5 1.5 0 0 1 2.12 2.12Z"
      fill="currentColor"
    />
    <path
      d="M9.198 6.718C8.268 6.023 5.313 6.51 2.48 9.9c.836.836 1.807.62 2.541.458.245-.054.463-.103.641-.105l3.536-3.535ZM16.976 14.687c.694.93.208 3.884-3.182 6.717-.836-.836-.62-1.806-.458-2.541.054-.244.102-.462.104-.64l3.536-3.536ZM6.37 17.515s.47-2.357 1.06-3.182c0 0 1.27-.144 1.768.353.497.498.353 1.768.353 1.768-1.178.707-3.182 1.06-3.182 1.06Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconRocketAltFilled)
export default Memo
