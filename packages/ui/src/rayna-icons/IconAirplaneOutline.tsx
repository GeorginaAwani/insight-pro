import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconAirplaneOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1a3 3 0 0 0-3 3v3.465L3.89 10.87A2 2 0 0 0 3 12.535v2.078a2 2 0 0 0 2.632 1.897L9 15.387v2.199l-2 2C5.74 20.846 6.632 23 8.414 23h1.463c.163 0 .326-.02.485-.06L12 22.53l1.638.41c.159.04.322.06.485.06h1.463c1.782 0 2.674-2.154 1.414-3.414l-2-2v-2.199l3.367 1.123A2 2 0 0 0 21 14.613v-2.078a2 2 0 0 0-.89-1.664L15 7.465V4a3 3 0 0 0-3-3Zm-1 3a1 1 0 1 1 2 0v3.465a2 2 0 0 0 .89 1.664L19 12.535v2.078l-3.367-1.123A2 2 0 0 0 13 15.387v2.199A2 2 0 0 0 13.586 19l2 2h-1.463l-1.638-.41a2 2 0 0 0-.97 0L9.877 21H8.414l2-2A2 2 0 0 0 11 17.586v-2.199a2 2 0 0 0-2.632-1.897L5 14.613v-2.078l5.11-3.406A2 2 0 0 0 11 7.465V4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconAirplaneOutline)
export default Memo
