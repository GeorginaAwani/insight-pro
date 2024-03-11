import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconEthOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="m18.517 11.178-6.105 1.744a1.5 1.5 0 0 1-.824 0l-6.105-1.744a1.5 1.5 0 0 1-.716-2.43l6.104-6.976a1.5 1.5 0 0 1 2.258 0l6.104 6.976a1.5 1.5 0 0 1-.716 2.43ZM6.79 9.472 12 10.96l5.209-1.488L12 3.519 6.791 9.472Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.208 22.047a1.5 1.5 0 0 1-2.415 0l-5.729-7.774c-.848-1.152.244-2.725 1.62-2.332L12 13.46l5.316-1.519c1.376-.393 2.468 1.18 1.62 2.332l-5.728 7.774Zm-5.664-7.78L12 20.314l4.456-6.047-4.044 1.155a1.5 1.5 0 0 1-.824 0l-4.044-1.155Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconEthOutline)
export default Memo
