import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconVolumeSlashFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M22.707 2.707a1 1 0 0 0-1.414-1.414l-20 20a1 1 0 1 0 1.414 1.414l20-20ZM15 3.868v2.304L3.96 17.212A3 3 0 0 1 2 14.398V9.602a3 3 0 0 1 2.576-2.97l3.75-.536a3 3 0 0 0 1.24-.474l3.88-2.586A1 1 0 0 1 15 3.868ZM9.566 18.377a2.998 2.998 0 0 0-.753-.362L15 11.828v8.303a1 1 0 0 1-1.555.832l-3.879-2.586Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconVolumeSlashFilled)
export default Memo
