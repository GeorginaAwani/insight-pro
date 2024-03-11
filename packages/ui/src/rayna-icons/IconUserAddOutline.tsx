import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconUserAddOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7 7a5 5 0 1 1 10 0A5 5 0 0 1 7 7Zm5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM6.555 21.917C8.23 22.65 10.46 23 12 23c1.54 0 3.77-.35 5.445-1.083.822-.36 1.657-.874 2.143-1.62A2.44 2.44 0 0 0 20 18.928c-.005-.51-.173-1-.456-1.455C18.174 15.266 15.374 13 12 13c-3.373 0-6.175 2.266-7.544 4.473-.283.455-.45.944-.456 1.455-.005.516.156.977.412 1.37.485.745 1.321 1.26 2.143 1.62ZM6 18.95c0-.073.024-.21.155-.422C7.278 16.718 9.515 15 12 15c2.484 0 4.723 1.718 5.845 3.527.131.212.154.349.155.422a.448.448 0 0 1-.087.256c-.166.256-.57.574-1.27.88-1.37.6-3.316.915-4.643.915s-3.273-.315-4.643-.915c-.7-.306-1.103-.625-1.27-.88A.448.448 0 0 1 6 18.95Z"
      fill="currentColor"
    />
    <path
      d="M21 3a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0V6h1a1 1 0 1 0 0-2h-1V3Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconUserAddOutline)
export default Memo
