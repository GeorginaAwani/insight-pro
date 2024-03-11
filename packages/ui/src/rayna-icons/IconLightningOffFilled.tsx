import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconLightningOffFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12 9.056c0 .036.004.07.011.105l-5.282 5.282a.5.5 0 0 1-.415-.702l4.73-10.597c.22-.493.956-.336.956.203v5.709ZM11.989 14.84l5.282-5.283a.5.5 0 0 1 .415.702l-4.73 10.598c-.22.492-.956.335-.956-.204v-5.708a.503.503 0 0 0-.011-.105ZM20.707 4.707a1 1 0 0 0-1.414-1.414l-16 16a1 1 0 1 0 1.414 1.414l16-16Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconLightningOffFilled)
export default Memo
