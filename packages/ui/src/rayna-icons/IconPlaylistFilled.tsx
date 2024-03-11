import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPlaylistFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2 4.5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 9.5a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 14.5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 19.5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM17.597 7a.674.674 0 0 1 .482.201c.323.228.82.638 1.323 1.053.64.528 1.289 1.063 1.598 1.238-.08.934-.74 2.723-2.702 3.022v3.628c.008.095.002.187-.01.274 0 .025-.002.051-.005.077C18.09 18.316 16.832 20 15.02 20c-1.314 0-2.336-1.77-2.873-2.954-.288-.636-.154-1.389.435-1.685.52-.26 1.306-.5 2.438-.5.782 0 1.4.114 1.877.27V7.735c0-.405.314-.734.701-.734Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPlaylistFilled)
export default Memo
