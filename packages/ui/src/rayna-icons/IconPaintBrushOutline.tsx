import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPaintBrushOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <g clipPath="url(#icon-paint-brush-outline_svg__a)">
      <path
        d="M11.176 16.651c-1.08-1.259-2.848-3.16-4.571-4.54a.925.925 0 0 0-.963-.122C2.7 13.342 3.37 14.927 4.04 20.959c.176 1.584 3.076-.995 6.888-3.07.454-.247.584-.845.248-1.238Zm0 0c2.778-2.778 8.977-9.684 10.033-13.448.15-.531-.297-.966-.82-.79-3.435 1.152-10.524 7.192-13.44 9.98"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="icon-paint-brush-outline_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const Memo = memo(SvgIconPaintBrushOutline)
export default Memo
