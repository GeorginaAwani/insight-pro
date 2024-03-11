import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconPlant2Outline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1a1 1 0 0 1 1 1v5.194C14.43 5.91 16.674 5 20 5a1 1 0 0 1 .952 1.305c-.74 2.315-2.428 3.794-4.147 4.695h1.005a2 2 0 0 1 1.97 2.345l-1.4 8A2 2 0 0 1 16.41 23H7.59a2 2 0 0 1-1.97-1.655l-1.4-8A2 2 0 0 1 6.19 11H11V9.233a12.353 12.353 0 0 1-3.782-1.221c-1.727-.9-3.426-2.382-4.17-4.707A1 1 0 0 1 4 2c3.326 0 5.57.91 7 2.194V2a1 1 0 0 1 1-1ZM8.142 6.238a10.27 10.27 0 0 0 2.593.916 4.158 4.158 0 0 0-1.014-1.42C8.939 5.01 7.664 4.33 5.63 4.09c.634.937 1.528 1.635 2.51 2.147Zm7.716 3a10.27 10.27 0 0 1-2.593.916c.196-.461.517-.96 1.014-1.42.783-.724 2.057-1.404 4.09-1.643-.634.937-1.528 1.635-2.51 2.147ZM7.59 21l-1.4-8h11.62l-1.4 8H7.59Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconPlant2Outline)
export default Memo
