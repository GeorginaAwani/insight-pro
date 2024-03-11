import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMoonCloudFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M14.54 2.326c.422.11.313.76-.111.861C11.365 3.92 9 6.71 9 10c0 .412.036.816.104 1.209a5.213 5.213 0 0 0-1.79 3.953c0 .24.016.475.047.707-1.282.555-2.21 1.803-2.344 3.289A9.97 9.97 0 0 1 2 12C2 6.477 6.477 2 12 2c.878 0 1.73.113 2.54.326ZM20.294 17.589a4.811 4.811 0 0 0-.699-1.582c.325-.194.632-.414.919-.657.333-.28.915.019.75.423a9.977 9.977 0 0 1-.97 1.816ZM7 18.765C7 20.552 8.343 22 10 22h5.4c1.988 0 3.6-1.738 3.6-3.882 0-1.717-1.033-3.174-2.466-3.686C16.197 12.479 14.61 11 12.7 11c-2.154 0-3.9 1.883-3.9 4.206 0 .195.012.388.036.576C7.757 16.272 7 17.422 7 18.765Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMoonCloudFilled)
export default Memo
