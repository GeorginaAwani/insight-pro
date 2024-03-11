import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconArOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2 6a4 4 0 0 1 4-4h2a1 1 0 0 1 0 2H6a2 2 0 0 0-2 2v2a1 1 0 0 1-2 0V6ZM22 6a4 4 0 0 0-4-4h-2a1 1 0 1 0 0 2h2a2 2 0 0 1 2 2v2a1 1 0 1 0 2 0V6ZM6 22a4 4 0 0 1-4-4v-2a1 1 0 1 1 2 0v2a2 2 0 0 0 2 2h2a1 1 0 1 1 0 2H6ZM22 18a4 4 0 0 1-4 4h-2a1 1 0 1 1 0-2h2a2 2 0 0 0 2-2v-2a1 1 0 1 1 2 0v2Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 6c-.33 0-.656.073-.955.213L8.297 7.507A4 4 0 0 0 6 11.126v3.242c0 .638.368 1.218.945 1.489l4.1 1.93a2.242 2.242 0 0 0 1.91 0l4.1-1.93c.577-.271.945-.851.945-1.489v-3.242a4 4 0 0 0-2.297-3.62l-2.748-1.293A2.243 2.243 0 0 0 12 6Zm1 5.159V8.445l1.852.871A2 2 0 0 1 16 11.126v1.851l-3-1.818Zm-.897 4.818 2.808-1.321L12 12.892l-2.91 1.764 2.807 1.32a.243.243 0 0 0 .206 0ZM11 8.445v2.714l-3 1.818v-1.851a2 2 0 0 1 1.148-1.81L11 8.446Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconArOutline)
export default Memo
