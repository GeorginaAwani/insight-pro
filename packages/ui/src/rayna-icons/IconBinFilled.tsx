import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconBinFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M9.5 2.75a1 1 0 0 0-.935.646l-.23.606a109.03 109.03 0 0 1-1.97-.215l-.18-.022-.061-.007a1 1 0 0 0-.247 1.984l.067.009.186.022a105.633 105.633 0 0 0 2.78.293c1.07.098 2.246.184 3.09.184.844 0 2.02-.086 3.09-.184a104.245 104.245 0 0 0 2.78-.293l.186-.022.067-.009a1 1 0 0 0-.246-1.984l-.062.007-.18.022a103.44 103.44 0 0 1-1.97.215l-.23-.606a1 1 0 0 0-.935-.646h-5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m17.912 7.98-.856 11.99a.975.975 0 0 1-.826.902c-.995.148-2.77.376-4.23.378-1.478.002-3.244-.228-4.233-.376a.974.974 0 0 1-.822-.9L6.088 7.979a1.018 1.018 0 0 1 1.134-1.077c1.273.147 3.286.348 4.778.348 1.491 0 3.505-.201 4.778-.348a1.018 1.018 0 0 1 1.134 1.077ZM11 11.75a1 1 0 1 0-2 0v5a1 1 0 0 0 2 0v-5Zm3-1a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0v-5a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconBinFilled)
export default Memo
