import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconWristwatchFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M9.019 5.665a3 3 0 0 1 5.963 0A6.973 6.973 0 0 0 12 5a6.973 6.973 0 0 0-2.981.665ZM9.019 18.335A6.972 6.972 0 0 0 12 19a6.972 6.972 0 0 0 2.982-.665 3 3 0 0 1-5.963 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.6 16.8A5.99 5.99 0 0 0 18 12a5.991 5.991 0 0 0-2.4-4.8A5.973 5.973 0 0 0 12 6c-1.35 0-2.597.446-3.6 1.2A5.99 5.99 0 0 0 6 12a5.99 5.99 0 0 0 2.4 4.8A5.973 5.973 0 0 0 12 18c1.35 0 2.597-.446 3.6-1.2ZM12.5 10a1 1 0 1 0-2 0v3a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-1v-2Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconWristwatchFilled)
export default Memo
