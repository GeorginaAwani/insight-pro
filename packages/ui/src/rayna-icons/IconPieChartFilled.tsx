import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPieChartFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12 21c4.633 0 8.448-3.5 8.945-8.002.06-.548-.393-.998-.945-.998h-5a3 3 0 0 1-3-3V4c0-.552-.45-1.006-.998-.945A9.001 9.001 0 0 0 12 21Z"
      fill="currentColor"
    />
    <path
      d="M21.93 8.003a7.004 7.004 0 0 0-5.933-5.933C15.45 1.994 15 2.449 15 3v5a1 1 0 0 0 1 1h5c.552 0 1.008-.45.93-.997Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPieChartFilled)
export default Memo
