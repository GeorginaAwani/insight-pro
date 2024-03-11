import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconImageFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H5ZM3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9l-4.373-2.915a2 2 0 0 0-2.748.517l-.762 1.088-.617-.387-.721-.408a2 2 0 0 0-2.624.595l-2.812 4.02A1.901 1.901 0 0 0 6.616 20H5a2 2 0 0 1-2-2V6Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconImageFilled)
export default Memo
