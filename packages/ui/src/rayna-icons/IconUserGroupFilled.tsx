import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconUserGroupFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM6.262 18c-1.42 2.67 3.28 4 5.738 4 2.458 0 7.158-1.33 5.738-4-1.068-2.008-3.228-4-5.738-4-2.51 0-4.67 1.992-5.738 4ZM7.5 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM2.896 19.445a1 1 0 1 1-1.792-.89 6.285 6.285 0 0 1 1.623-2.052c.7-.568 1.597-1.003 2.62-1.003a1 1 0 1 1 0 2c-.44 0-.906.188-1.358.555a4.286 4.286 0 0 0-1.093 1.39ZM20.81 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM22.9 18.555a1 1 0 1 1-1.791.89 4.287 4.287 0 0 0-1.093-1.39c-.452-.367-.918-.555-1.359-.555a1 1 0 1 1 0-2c1.024 0 1.92.435 2.62 1.003a6.284 6.284 0 0 1 1.623 2.052Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconUserGroupFilled)
export default Memo
