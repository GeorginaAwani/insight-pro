import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconFeatherFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M4.396 18.954C5.892 12.807 10.619 3.46 20.89 3.05c.053-.002.1.04.105.093.437 5.293-3.203 5.56-6.31 5.414-.082-.004-.133.09-.09.16 1.797 2.895-.637 4.566-2.109 3.83-4.228-1.76-5.484 2.546-6.6 6.373-.072.246-.143.49-.215.73-.157.529-.54.746-.885.676-.537-.11-.52-.838-.391-1.37Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconFeatherFilled)
export default Memo
