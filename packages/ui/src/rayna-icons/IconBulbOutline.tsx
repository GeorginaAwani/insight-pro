import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBulbOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M13.192 7.29a1 1 0 0 1 .129 1.263 1 1 0 0 1 .446 1.59l-1.257 1.5a1 1 0 0 1-1.628-1.15 1 1 0 0 1-.592-1.697l1.488-1.5a1 1 0 0 1 1.414-.006Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 9.5a7.5 7.5 0 1 1 11.287 6.475l-.743 2.973A1.389 1.389 0 0 1 13.696 20c-.138 0-.279.013-.434.035A1 1 0 0 1 13 22h-2a1 1 0 0 1-.262-1.965 3.056 3.056 0 0 0-.434-.035 1.389 1.389 0 0 1-1.348-1.052l-.743-2.973A7.497 7.497 0 0 1 4.5 9.5ZM12 4a5.5 5.5 0 0 0-2.473 10.414 1 1 0 0 1 .52.65l.74 2.962c.311.032.6.088.844.135l.034.006.189.036c.082.016.13.019.146.019a.925.925 0 0 0 .146-.019l.19-.036.033-.006a9.64 9.64 0 0 1 .844-.135l.74-2.961a1 1 0 0 1 .52-.65A5.5 5.5 0 0 0 12 4Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBulbOutline)
export default Memo
