import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMessagesOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M7 7.5a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2H7ZM6 13a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM15 14.5a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM14 18a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 12.764V6.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h1.914a2 2 0 0 1 1.28.464l2.166 1.804a1 1 0 0 0 1.009.162c.47.305 1.03.482 1.631.482h.371a2 2 0 0 1 1.163.373l.859.613a2 2 0 0 0 2.325 0l1.054-.753a1.25 1.25 0 0 1 .727-.233 2.5 2.5 0 0 0 2.501-2.5V15c0-.889-.386-1.687-1-2.236Zm-11 5.101V15a3 3 0 0 1 3-3h6V6.5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1.914a4 4 0 0 1 2.56.927l.526.438Zm7.61 2.153a3.251 3.251 0 0 1 1.89-.606.5.5 0 0 0 .5-.5V15a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v3.412a1 1 0 0 0 1 1h.371a4 4 0 0 1 2.326.745l.859.614 1.053-.753Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMessagesOutline)
export default Memo
