import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBulbSlashFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M20.707 3.293a1 1 0 0 1 0 1.414l-14.5 14.5a1 1 0 0 1-1.414-1.414l14.5-14.5a1 1 0 0 1 1.414 0ZM10 21a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM12 3c1.711 0 3.268.661 4.43 1.743l-9.187 9.186A6.5 6.5 0 0 1 12 3ZM9.566 17.263l8.844-8.845a6.5 6.5 0 0 1-3.487 6.89l-.85 3.397a.389.389 0 0 1-.377.295c-.394 0-.784.075-1.172.15l-.194.036a1.853 1.853 0 0 1-.33.036c-.101 0-.216-.014-.33-.036l-.194-.037c-.388-.074-.778-.149-1.172-.149a.389.389 0 0 1-.378-.295l-.36-1.442Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBulbSlashFilled)
export default Memo
