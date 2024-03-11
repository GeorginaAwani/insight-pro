import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPencilOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.84 3.661a4 4 0 0 0-5.657 0l-.631.632-9.975 9.975a4 4 0 0 0-1.132 2.263l-.377 2.64a2 2 0 0 0 2.263 2.262l2.64-.377a4 4 0 0 0 2.262-1.131l9.975-9.975.632-.632a4 4 0 0 0 0-5.657Zm-1.414 1.415a2 2 0 0 1 .073 2.75l-2.824-2.824a2 2 0 0 1 2.75.074Zm-4.167 1.338 2.828 2.829L8.82 18.51a2 2 0 0 1-1.131.565l-2.64.377.377-2.64a2 2 0 0 1 .566-1.13l9.268-9.269Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPencilOutline)
export default Memo
