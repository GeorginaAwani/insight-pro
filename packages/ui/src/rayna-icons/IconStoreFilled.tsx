import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconStoreFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M2.844 5.121 2.27 6.326a2.786 2.786 0 0 0 .358 2.96l.146.182c.211.264.46.503.775.63.87.348 1.884.272 2.691-.232l.11-.067a3.214 3.214 0 0 1 3.038-.177l1.215.567a3.343 3.343 0 0 0 2.814 0l1.215-.567a3.214 3.214 0 0 1 3.039.177l.108.067a3.002 3.002 0 0 0 3.148 0c.923-.575 1.306-1.667.927-2.642l-.748-1.922c-.427-1.1-1.512-1.859-2.76-1.932L12.01 3l-6.488.38c-1.17.068-2.203.739-2.68 1.741Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m6.604 11.152-.104.062a2.986 2.986 0 0 1-3 0l.37 7.238C3.943 19.878 5.263 21 6.867 21h10.266c1.604 0 2.924-1.122 2.997-2.548l.37-7.238a2.986 2.986 0 0 1-3 0l-.104-.062a3.2 3.2 0 0 0-2.897-.16l-1.158.514a3.335 3.335 0 0 1-2.683 0l-1.157-.514a3.2 3.2 0 0 0-2.897.16Zm3.103 5.294L10 19.567h4l.292-3.121c.112-1.194-.946-2.217-2.292-2.217-1.346 0-2.404 1.024-2.293 2.217Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconStoreFilled)
export default Memo
