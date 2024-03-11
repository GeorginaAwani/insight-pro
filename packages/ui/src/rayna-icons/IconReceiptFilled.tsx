import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconReceiptFilled = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 18.812V5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v13.812c0 1.924-2.025 3.176-3.746 2.315a2.585 2.585 0 0 0-.53-.196l-2.996-.75a3 3 0 0 0-1.456 0l-2.996.75c-.184.046-.361.112-.53.196-1.721.86-3.746-.39-3.746-2.315ZM8 6a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8Zm-1 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 4a1 1 0 1 0 0 2h2.667a1 1 0 1 0 0-2H8Zm5.333 0a1 1 0 1 0 0 2H16a1 1 0 1 0 0-2h-2.667Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconReceiptFilled)
export default Memo
