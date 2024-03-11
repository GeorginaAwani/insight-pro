import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconWalletAdd = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 6.639C2 4.629 3.63 3 5.639 3h7.987c.394 0 .715.157.942.315.226.158.415.357.569.544.305.37.588.84.828 1.253l.174.3c.184.32.35.606.513.853.08.122.15.218.21.29H18a4 4 0 0 1 3.999 4V16a.999.999 0 0 1-.4.8 2 2 0 0 0-3.332.2H18a3 3 0 1 1 0-6h2v-.444a2 2 0 0 0-2-2H4V17a2 2 0 0 0 2 2h9.5c.248 0 .475.09.65.24a1.994 1.994 0 0 0 0 1.52.996.996 0 0 1-.65.24H6a4 4 0 0 1-4-4V6.639Zm2.002-.083H14.49l-.105-.18c-.05-.09-.1-.175-.148-.258-.245-.421-.455-.759-.644-.988-.05-.06-.089-.102-.118-.13H5.639c-.877 0-1.594.69-1.637 1.556ZM20 13h-2a1 1 0 1 0 0 2h2v-2Z"
      fill="currentColor"
    />
    <path
      d="M21 18a1 1 0 1 0-2 0v1h-1a1 1 0 1 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1v-1Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconWalletAdd)
export default Memo
