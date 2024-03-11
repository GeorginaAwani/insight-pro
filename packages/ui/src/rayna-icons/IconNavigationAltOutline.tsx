import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconNavigationAltOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.259 5.835c.764-2.015-1.21-3.988-3.224-3.224L3.738 8.034c-2.008.762-2.184 3.536-.287 4.545l4.983 2.65a.5.5 0 0 1 .207.207l2.65 4.983c1.01 1.897 3.783 1.721 4.545-.287L21.26 5.835Zm-2.515-1.354a.5.5 0 0 1 .645.645l-5.423 14.296a.5.5 0 0 1-.909.058l-2.65-4.983a2.5 2.5 0 0 0-1.034-1.034l-4.983-2.65a.5.5 0 0 1 .058-.91l14.296-5.422Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconNavigationAltOutline)
export default Memo
