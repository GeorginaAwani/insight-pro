import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconGamepadFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M16 3a1 1 0 1 0-2 0c0 .173-.06.456-.212.666-.114.159-.314.334-.788.334-.53 0-1.034.11-1.449.398-.433.3-.661.723-.753 1.137-.103.468-.037.939.077 1.326a7.646 7.646 0 0 0-8.269 6.108l-.223 1.115a5.054 5.054 0 0 0 6.345 5.85l1.372-.391a6.914 6.914 0 0 1 3.8 0l1.372.392a5.054 5.054 0 0 0 6.345-5.851l-.223-1.115a7.646 7.646 0 0 0-8.401-6.093 1 1 0 0 0-.099-.323 1.567 1.567 0 0 1-.126-.356.86.86 0 0 1-.02-.173C12.794 6.012 12.874 6 13 6c1.126 0 1.926-.492 2.412-1.166A3.232 3.232 0 0 0 16 3Zm-8 7a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2H9v1a1 1 0 1 1-2 0v-1H6a1 1 0 1 1 0-2h1v-1a1 1 0 0 1 1-1Zm8 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm1 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm1-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-3 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconGamepadFilled)
export default Memo
