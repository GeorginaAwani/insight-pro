import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBulbSlashOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12 2c1.988 0 3.794.773 5.137 2.035L15.72 5.45a5.5 5.5 0 0 0-7.771 7.771l-1.415 1.415A7.5 7.5 0 0 1 12 2ZM17.497 9.331l1.754-1.754A7.51 7.51 0 0 1 19.5 9.5a7.497 7.497 0 0 1-3.713 6.475l-.743 2.973A1.389 1.389 0 0 1 13.696 20c-.138 0-.279.013-.434.035A1 1 0 0 1 13 22h-2a1 1 0 0 1-.262-1.965 3.056 3.056 0 0 0-.434-.035 1.389 1.389 0 0 1-1.348-1.052l-.215-.86 1.65-1.65.396 1.588c.311.032.6.088.844.135l.034.006.189.036c.082.016.13.019.146.019a.925.925 0 0 0 .146-.019l.19-.036.033-.006a9.64 9.64 0 0 1 .844-.135l.74-2.961a1 1 0 0 1 .52-.65 5.5 5.5 0 0 0 3.024-5.084ZM20.707 3.293a1 1 0 0 1 0 1.414l-14.5 14.5a1 1 0 0 1-1.414-1.414l14.5-14.5a1 1 0 0 1 1.414 0Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBulbSlashOutline)
export default Memo
