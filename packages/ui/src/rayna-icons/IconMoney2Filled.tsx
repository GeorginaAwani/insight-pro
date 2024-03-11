import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMoney2Filled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M13 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 9.193v7.988c0 1.585-1.232 2.894-2.815 2.942-.95.03-2.056.05-3.185.046-.8-.004-2.957-.524-4.863-.984C9.756 18.85 8.506 18.55 8 18.5a229.778 229.778 0 0 0-3.168-.29C3.245 18.077 2 16.753 2 15.16V7.169C2 5.447 3.444 4.09 5.159 4.238c.798.068 1.746.155 2.841.262.506.05 1.756.351 3.137.685 1.906.46 4.062.98 4.863.984a90.93 90.93 0 0 0 2.81-.035C20.54 6.087 22 7.463 22 9.193ZM5.091 6.417a1 1 0 1 0-.174 1.992l1.992.174a1 1 0 0 0 .174-1.992l-1.992-.174Zm10.917 1.909a1 1 0 0 1 1.083-.91l1.992.175a1 1 0 0 1-.174 1.992l-1.992-.174a1 1 0 0 1-.91-1.083ZM5.09 15.004a1 1 0 0 0-.174 1.992l1.992.175a1 1 0 0 0 .174-1.993l-1.992-.174Zm10.917 2.322a1 1 0 0 1 1.083-.91l1.992.175a1 1 0 1 1-.174 1.992l-1.992-.174a1 1 0 0 1-.91-1.083ZM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
      fill="current"
    />
  </svg>
)
const Memo = memo(SvgIconMoney2Filled)
export default Memo
