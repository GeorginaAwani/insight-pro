import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPlaylistOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2 4.5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 9.5a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 13.5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H3ZM2 19.5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.808 6.69a1 1 0 0 0-1.586.81v7.367a6.56 6.56 0 0 0-1.723-.212c-1.069 0-1.862.206-2.43.464-1.152.522-1.257 1.792-.842 2.619.24.479.611 1.124 1.103 1.663.474.52 1.207 1.099 2.169 1.099 2.333 0 3.723-2.102 3.723-3.99v-3.964a3.53 3.53 0 0 0 1.874-1.092c.59-.663.845-1.45.9-2.016a1 1 0 0 0-.545-.987c-.523-.265-1.946-1.258-2.643-1.761ZM15.5 16.655c.873 0 1.398.18 1.675.319-.184.877-.875 1.526-1.675 1.526-.125 0-.36-.083-.691-.447-.304-.333-.57-.774-.773-1.171.304-.115.776-.227 1.464-.227Zm4.105-6.533c-.097.108-.22.216-.382.306V9.416c.206.138.41.271.6.392a1.623 1.623 0 0 1-.218.314Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPlaylistOutline)
export default Memo
