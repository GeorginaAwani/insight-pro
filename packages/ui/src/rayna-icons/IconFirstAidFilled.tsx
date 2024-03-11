import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconFirstAidFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.538 6.667H5.222A2.222 2.222 0 0 0 3 8.889v.482l7.266 2.698c.412.153.848.231 1.287.231h.894c.44 0 .875-.078 1.287-.231L21 9.37V8.89a2.222 2.222 0 0 0-2.222-2.222h-2.316A3.668 3.668 0 0 0 12.933 4h-1.866a3.668 3.668 0 0 0-3.529 2.667Zm2.195 0h4.534A1.664 1.664 0 0 0 12.933 6h-1.866c-.546 0-1.03.262-1.334.667ZM13 8.75a1 1 0 1 0-2 0 1 1 0 1 0 0 2 1 1 0 1 0 2 0 1 1 0 1 0 0-2Z"
      fill="currentColor"
    />
    <path
      d="m4.527 17.302-.627-6.19 6.696 2.479a3 3 0 0 0 1.042.187h.724a3 3 0 0 0 1.042-.187l6.696-2.48-.627 6.191A3 3 0 0 1 16.488 20H7.512a3 3 0 0 1-2.985-2.698Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconFirstAidFilled)
export default Memo
