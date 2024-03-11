import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMagicWandOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.46 3.157a2 2 0 0 0-2.926-.105l-.582.583a2 2 0 0 0-.097 2.724l11.687 13.484a2 2 0 0 0 2.925.105l.583-.582a2 2 0 0 0 .097-2.724L10.46 3.157ZM8.366 5.049l.583-.582.186.215-.582.582-.187-.215Zm1.5 1.73.582-.582 10.187 11.754-.582.582L9.866 6.78Z"
      fill="currentColor"
    />
    <path
      d="M3.613 8.65a1.611 1.611 0 0 0-1.02-1.02.537.537 0 0 1 0-1.018c.482-.16.86-.538 1.02-1.02a.537.537 0 0 1 1.019 0c.16.482.538.86 1.019 1.02.49.163.49.856 0 1.019-.481.16-.859.538-1.02 1.019a.537.537 0 0 1-1.018 0ZM7.613 15.65a1.611 1.611 0 0 0-1.02-1.02.537.537 0 0 1 0-1.018c.482-.16.86-.538 1.02-1.02a.537.537 0 0 1 1.019 0c.16.482.538.86 1.019 1.02.49.163.49.856 0 1.019-.481.16-.859.538-1.02 1.019a.537.537 0 0 1-1.018 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMagicWandOutline)
export default Memo
