import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconSendAiOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.372 9.72c1.965.885 1.965 3.675 0 4.56l-14.14 6.362c-1.904.857-3.957-.86-3.45-2.886l.983-3.936A2.5 2.5 0 0 1 5.588 12a2.5 2.5 0 0 1-1.823-1.82l-.984-3.936C2.275 4.218 4.328 2.5 6.232 3.358l14.14 6.362Zm-2.397 1.115L5.412 5.181a.5.5 0 0 0-.69.578l.983 3.936a.5.5 0 0 0 .453.378l11.817.762Zm0 2.33-11.817.763a.5.5 0 0 0-.453.377l-.984 3.936a.5.5 0 0 0 .69.578l12.564-5.654Z"
      fill="currentColor"
    />
    <path
      d="M16.594 5.63c.481.161.858.539 1.019 1.02.163.49.856.49 1.019 0 .16-.481.538-.859 1.019-1.02a.537.537 0 0 0 0-1.018 1.611 1.611 0 0 1-1.02-1.02.537.537 0 0 0-1.018 0 1.61 1.61 0 0 1-1.02 1.02.537.537 0 0 0 0 1.019Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconSendAiOutline)
export default Memo
