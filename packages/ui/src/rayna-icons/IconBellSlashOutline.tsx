import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBellSlashOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M13 3.57a6.966 6.966 0 0 1 3.241 1.36L14.81 6.363A5 5 0 0 0 7 10.499v3.673l-3.167 3.167c.082-.407.234-.801.436-1.161.215-.383.41-.763.547-1.093a3.6 3.6 0 0 0 .15-.415c.014-.055.024-.098.029-.13L5 14.5V10.499a7 7 0 0 1 6-6.928V3a1 1 0 1 1 2 0v.57ZM16.96 9.868l1.657-1.657c.248.717.383 1.487.383 2.288v4s0 .013.005.042c.005.031.015.074.03.13.03.111.08.25.149.415.138.33.332.709.547 1.092.404.72.608 1.577.455 2.393-.161.86-.715 1.61-1.661 1.971-.845.322-1.97.616-3.455.791-.035.03-.077.066-.125.104-.15.12-.365.276-.636.431A4.664 4.664 0 0 1 12 22.5c-.974 0-1.77-.324-2.309-.632a4.966 4.966 0 0 1-.761-.535c-1.157-.136-2.095-.345-2.852-.582l1.638-1.639c1.053.224 2.45.388 4.284.388 2.924 0 4.738-.418 5.813-.827.26-.099.367-.256.407-.47.049-.259-.006-.641-.233-1.046-.234-.417-.469-.87-.648-1.3-.165-.395-.339-.894-.339-1.357v-4c0-.214-.013-.425-.04-.632ZM20.707 3.293a1 1 0 0 1 0 1.414l-16 16a1 1 0 0 1-1.414-1.414l16-16a1 1 0 0 1 1.414 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBellSlashOutline)
export default Memo
