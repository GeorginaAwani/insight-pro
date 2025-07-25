import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconUserOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10ZM9 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM12 23c-1.54 0-3.77-.35-5.445-1.083-.822-.36-1.658-.874-2.143-1.62A2.441 2.441 0 0 1 4 18.928c.005-.51.173-1 .456-1.455C5.826 15.266 8.626 13 12 13c3.373 0 6.175 2.266 7.544 4.473.283.455.45.944.456 1.455a2.44 2.44 0 0 1-.412 1.37c-.486.745-1.321 1.26-2.143 1.62C15.77 22.65 13.54 23 12 23Zm-5.845-4.473c-.131.212-.154.349-.155.422 0 .068.017.148.087.256.167.256.57.574 1.27.88 1.37.6 3.316.915 4.643.915s3.273-.315 4.643-.915c.7-.306 1.104-.625 1.27-.88A.448.448 0 0 0 18 18.95c0-.073-.024-.21-.155-.422C16.723 16.718 14.485 15 12 15c-2.484 0-4.722 1.718-5.845 3.527Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconUserOutline)
export default Memo
