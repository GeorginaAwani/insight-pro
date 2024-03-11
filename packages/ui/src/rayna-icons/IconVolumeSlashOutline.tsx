import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconVolumeSlashOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M22.707 2.707a1 1 0 0 0-1.414-1.414l-20 20a1 1 0 1 0 1.414 1.414l20-20ZM16 3.869v1.303l-2 2V3.869l-3.88 2.586a4 4 0 0 1-1.652.631l-3.75.536A2 2 0 0 0 3 9.602v4.796a2 2 0 0 0 1.717 1.98l.067.01L3.2 17.97A4 4 0 0 1 1 14.398V9.602a4 4 0 0 1 3.434-3.96l3.75-.536a2 2 0 0 0 .827-.315l3.88-2.587C14.22 1.318 16 2.272 16 3.87ZM14 12.829l2-2v9.303c0 1.597-1.78 2.55-3.11 1.664L9.012 19.21a1.999 1.999 0 0 0-.826-.316l-.219-.031 1.618-1.619c.186.087.365.187.537.302L14 20.131v-7.304Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconVolumeSlashOutline)
export default Memo
