import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconWalletCrossOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 6.639C2 4.629 3.63 3 5.639 3h7.987c.394 0 .715.157.942.315.226.158.415.357.569.544.305.37.588.84.828 1.253l.174.3c.184.32.35.606.513.853.08.122.15.218.21.29H18a4 4 0 0 1 3.999 4v4.956a3.007 3.007 0 0 0-2.172.257 3.001 3.001 0 0 0-3.633.628A3 3 0 0 1 18 11h2v-.444a2 2 0 0 0-2-2H4V17a2 2 0 0 0 2 2h9.472c.056.286.155.566.296.828A2.993 2.993 0 0 0 15.424 21H6a4 4 0 0 1-4-4V6.639Zm2.002-.083H14.49l-.105-.18c-.05-.09-.1-.175-.148-.258-.245-.421-.455-.759-.644-.988-.05-.06-.089-.102-.118-.13H5.639c-.877 0-1.594.69-1.637 1.556ZM20 13h-2a1 1 0 1 0 0 2h2v-2Z"
      fill="currentColor"
    />
    <path
      d="m21.243 19.828.707-.707a1 1 0 0 0-1.415-1.414l-.707.707-.707-.707a1 1 0 0 0-1.414 1.414l.707.707-.707.707a1 1 0 0 0 1.414 1.415l.707-.707.707.707a1 1 0 1 0 1.415-1.415l-.707-.707Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconWalletCrossOutline)
export default Memo
