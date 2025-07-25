import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconHeadsetOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 3C6.477 3 2 7.477 2 13v5.412a2.588 2.588 0 0 0 5.176 0V16.25c0-1.942-1.714-2.842-3.176-2.543V13a8 8 0 1 1 16 0v.697c-1.461-.298-3.176.598-3.176 2.542v2.173c0 .476.128.923.353 1.306-.885.44-2.093.782-3.677.782a1 1 0 0 0 0 2c2.444 0 4.256-.69 5.497-1.533A2.588 2.588 0 0 0 22 18.412V13c0-5.523-4.477-10-10-10Zm7.252 15.978a.589.589 0 0 0 .748-.566v-2.324a.528.528 0 0 0-.204-.34.645.645 0 0 0-.42-.105.644.644 0 0 0-.4.167c-.075.073-.152.196-.152.429v2.173c0 .219.12.41.297.511.045.015.089.034.131.055ZM4 18.412v-2.32a.528.528 0 0 1 .205-.335.644.644 0 0 1 .42-.103c.17.014.31.08.4.168.075.074.151.197.151.429v2.16a.588.588 0 0 1-1.176 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconHeadsetOutline)
export default Memo
