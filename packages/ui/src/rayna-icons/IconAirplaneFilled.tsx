import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconAirplaneFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12 2a2 2 0 0 1 2 2v3.465a1 1 0 0 0 .445.832l5.11 3.406a1 1 0 0 1 .445.832v2.078a1 1 0 0 1-1.316.948l-3.368-1.122a1 1 0 0 0-1.316.948v2.199a1 1 0 0 0 .293.707l2 2c.63.63.184 1.707-.707 1.707h-1.463a.996.996 0 0 1-.242-.03l-1.639-.41a1 1 0 0 0-.485 0l-1.638.41c-.079.02-.16.03-.242.03H8.414c-.89 0-1.337-1.077-.707-1.707l2-2a1 1 0 0 0 .293-.707v-2.199a1 1 0 0 0-1.316-.948L5.316 15.56A1 1 0 0 1 4 14.613v-2.078a1 1 0 0 1 .445-.832l5.11-3.406A1 1 0 0 0 10 7.465V4a2 2 0 0 1 2-2Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconAirplaneFilled)
export default Memo
