import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPullRequestFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m14.399 4.016.308-.309a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 1 0 1.414-1.414l-.26-.26A3 3 0 0 1 17 9v8a1 1 0 0 0 .02.2 2.5 2.5 0 1 0 1.96 0A1 1 0 0 0 19 17V9a5 5 0 0 0-4.601-4.984ZM4.5 5.5A2.5 2.5 0 0 0 6 7.792V17c0 .068.007.135.02.2a2.5 2.5 0 1 0 1.96 0c.013-.065.02-.132.02-.2V7.792A2.5 2.5 0 1 0 4.5 5.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPullRequestFilled)
export default Memo
