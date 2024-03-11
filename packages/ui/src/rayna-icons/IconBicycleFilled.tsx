import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBicycleFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.5 4a1 1 0 0 1 1-1H5a1 1 0 0 1 1 1v1.667L7 7h6.634a1 1 0 0 1 .866-1.5H18a1 1 0 1 1 0 2h-.965l-.452.679 1.883 7.063a1 1 0 0 1-1.38 1.168L7.5 12.053V15.5a1 1 0 1 1-2 0V8.333L4.2 6.6A1 1 0 0 1 4 6V5h-.5a1 1 0 0 1-1-1Zm5 5v.856l8.489 3.859L14.732 9H7.5Z"
      fill="currentColor"
    />
    <path
      d="M4.75 12.353a4.501 4.501 0 1 0 5.603 1.82l-2.103-.955V15.5a1.75 1.75 0 1 1-3.5 0v-3.147ZM13 16.5c0-.367.044-.724.127-1.066l3.649 1.66a1.75 1.75 0 0 0 2.415-2.045l-.79-2.959A4.502 4.502 0 0 1 17.5 21a4.5 4.5 0 0 1-4.5-4.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBicycleFilled)
export default Memo
