import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconImageCircleFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M6.183 8.798c.481.16.859.538 1.019 1.02.163.489.856.489 1.019 0 .16-.482.538-.86 1.019-1.02a.537.537 0 0 0 0-1.019A1.611 1.611 0 0 1 8.22 6.76a.537.537 0 0 0-1.018 0c-.16.481-.538.859-1.019 1.02a.537.537 0 0 0 0 1.018Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11-9a9 9 0 0 0-5.41 16.192l2.596-3.552a2 2 0 0 1 2.688-.691l.765.411.652-2.643a2 2 0 0 1 3.045-1.16l4.365 2.754C20.896 13.574 21 12.8 21 12a9 9 0 0 0-9-9Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconImageCircleFilled)
export default Memo
