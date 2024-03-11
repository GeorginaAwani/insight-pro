import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconFingerprintOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2 17.2V12C2 6.477 6.477 2 12 2v0c5.523 0 10 4.477 10 10v9"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 18.714V11.693c0-.647.119-1.289.35-1.893v0M19 11.857a6.782 6.782 0 0 0-2.37-5.143A7.057 7.057 0 0 0 12 5c-2.087 0-3.96.894-5.243 2.313"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 13v-1a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v0"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 12v1a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2v-1"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 12.4v.1a5.5 5.5 0 0 0 5.5 5.5v0a5.5 5.5 0 0 0 5.5-5.5V12M17.334 20a6.47 6.47 0 0 1-3.5 1.022A6.442 6.442 0 0 1 12 20.757M8 19v1"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
const Memo = memo(SvgIconFingerprintOutline)
export default Memo
