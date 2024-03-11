import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCallIncomingFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="m4.926 3.515-.536.535c-.563.563-.876 1.33-.69 2.103.397 1.653 1.632 4.839 5.468 8.675 3.837 3.837 7.022 5.071 8.676 5.469.773.186 1.54-.128 2.102-.69l.536-.536a3 3 0 0 0 0-4.243l-.929-.928a3 3 0 0 0-3.604-.487l-.097.055c-.94.535-2.104.532-2.98-.102-.437-.316-.89-.673-1.229-1.012-.34-.34-.696-.792-1.012-1.229-.635-.876-.637-2.04-.102-2.98l.055-.097a3 3 0 0 0-.487-3.604l-.929-.93a3 3 0 0 0-4.242 0Z"
      fill="currentColor"
    />
    <path
      d="M13.737 9.327a1 1 0 0 0 .94.94l2.003.117a1 1 0 0 0 .318-1.964l1.98-1.98a1 1 0 0 0-1.414-1.415l-1.98 1.98a1 1 0 0 0-1.965.318l.118 2.004Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCallIncomingFilled)
export default Memo
