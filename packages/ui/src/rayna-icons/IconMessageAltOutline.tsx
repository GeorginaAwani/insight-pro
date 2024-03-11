import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMessageAltOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6 10a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1ZM7 13a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2H7Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 16a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V9.297a2 2 0 0 1 .264-.993l.75-1.312C22.774 5.66 21.812 4 20.276 4H5a4 4 0 0 0-4 4v8Zm4 2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h15.277l-.75 1.312A4 4 0 0 0 19 9.297V16a2 2 0 0 1-2 2H5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMessageAltOutline)
export default Memo
