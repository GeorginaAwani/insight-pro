import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconImageOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M5.183 8.798c.481.16.858.538 1.019 1.02.163.489.856.489 1.019 0 .16-.482.538-.86 1.019-1.02a.537.537 0 0 0 0-1.019A1.611 1.611 0 0 1 7.22 6.76a.537.537 0 0 0-1.018 0c-.16.481-.538.859-1.02 1.02a.537.537 0 0 0 0 1.018Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H5Zm16 11.798V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h.143a2.899 2.899 0 0 1 .38-2.564l2.813-4.02a3 3 0 0 1 3.935-.891l.316.178.473-.675a3 3 0 0 1 4.121-.776L21 13.798Zm-9.565.551-.149-.084a1 1 0 0 0-1.312.298l-2.811 4.02A.901.901 0 0 0 7.9 20h1.111a2.956 2.956 0 0 1 .372-2.72l2.05-2.93ZM11.84 20H19a2 2 0 0 0 2-2v-1.263a1 1 0 0 0-.445-.832l-4.483-2.989a1 1 0 0 0-1.374.26l-3.676 5.25a1 1 0 0 0 .82 1.574Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconImageOutline)
export default Memo
