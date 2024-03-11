import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconImageCircleOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1ZM3 12a9 9 0 1 1 17.896 1.374l-4.005-2.649h-.002a3 3 0 0 0-4.565 1.74l-.004.012-.349 1.414a3 3 0 0 0-3.613 1.188l-2.534 3.467A8.975 8.975 0 0 1 3 12Zm12.784.391 4.551 3.01a9.004 9.004 0 0 1-8.057 5.595l1.982-8.032a1 1 0 0 1 1.521-.575l.003.002Zm-4.303 3.485-1.223 4.956a8.94 8.94 0 0 1-2.837-1.082l2.596-3.551.02-.034a1 1 0 0 1 1.344-.346l.1.057Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconImageCircleOutline)
export default Memo
