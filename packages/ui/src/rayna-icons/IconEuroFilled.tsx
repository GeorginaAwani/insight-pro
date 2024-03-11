import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconEuroFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M12.69 3a6.355 6.355 0 0 0-6.345 6H3.5a1 1 0 0 0 0 2h2.78l-.046 1.5H3.5a1 1 0 1 0 0 2h2.671l-.074 2.375A4 4 0 0 0 10.095 21H17a1 1 0 1 0 0-2h-6.905a2 2 0 0 1-1.999-2.063l.076-2.437H12.5a1 1 0 1 0 0-2H8.235l.047-1.5H12.5a1 1 0 1 0 0-2H8.35a4.355 4.355 0 0 1 4.34-4h1.074c.992 0 1.898.56 2.342 1.447a1 1 0 1 0 1.788-.894A4.618 4.618 0 0 0 13.764 3H12.69Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconEuroFilled)
export default Memo
