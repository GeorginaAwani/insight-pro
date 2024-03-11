import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconThermometerOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M13 5a1 1 0 1 0-2 0v11a1 1 0 1 0 2 0V5Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1a3.647 3.647 0 0 0-3.647 3.647v7.27A6.233 6.233 0 0 0 6 16.823C6 20.2 8.654 23 12 23s6-2.799 6-6.177a6.234 6.234 0 0 0-2.353-4.906v-7.27A3.647 3.647 0 0 0 12 1ZM8 16.823a4.23 4.23 0 0 1 1.661-3.39c.398-.3.692-.787.692-1.363V4.647a1.647 1.647 0 0 1 3.294 0v7.423c0 .576.294 1.064.692 1.363A4.23 4.23 0 0 1 16 16.823C16 19.163 14.177 21 12 21s-4-1.837-4-4.177Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconThermometerOutline)
export default Memo
