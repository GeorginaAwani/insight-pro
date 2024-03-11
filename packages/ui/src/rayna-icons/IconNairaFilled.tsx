import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconNairaFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18.334 5a1 1 0 0 0-2 0v4.286h-4.941L8.415 4.819c-.823-1.235-2.748-.652-2.748.832v3.635H4a1 1 0 0 0 0 2h1.667v1.428H4a1 1 0 1 0 0 2h1.667V19a1 1 0 1 0 2 0v-4.286h4.94l2.979 4.467c.823 1.235 2.748.652 2.748-.832v-3.635H20a1 1 0 1 0 0-2h-1.666v-1.428H20a1 1 0 1 0 0-2h-1.666V5Zm-4.656 7.714-.952-1.428h3.608v1.428h-2.656Zm2.656 3.983-1.322-1.983h1.322v1.983Zm-6.012-5.411.953 1.428H7.667v-1.428h2.655ZM7.667 7.303l1.322 1.983H7.667V7.303Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconNairaFilled)
export default Memo
