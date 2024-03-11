import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconWalletFundOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 6.639C2 4.629 3.63 3 5.639 3h7.987c.394 0 .715.157.942.315.226.158.415.357.569.544.305.37.588.84.828 1.253l.174.3c.184.32.35.606.513.853.08.122.15.218.21.29H18a4 4 0 0 1 3.999 4v4.653l-.507-.45A2.99 2.99 0 0 0 20 14.042V13h-2a1 1 0 0 0-.567 1.824l-1.426 1.267-.082.076A3 3 0 0 1 18 11h2v-.444a2 2 0 0 0-2-2H4V17a2 2 0 0 0 2 2h9.074a2.987 2.987 0 0 0 1.114 1.725.997.997 0 0 1-.688.275H6a4 4 0 0 1-4-4V6.639Zm2.002-.083H14.49l-.105-.18c-.05-.09-.1-.175-.148-.258-.245-.421-.455-.759-.644-.988-.05-.06-.089-.102-.118-.13H5.639c-.877 0-1.594.69-1.637 1.556Z"
      fill="currentColor"
    />
    <path
      d="M20.164 16.253a1 1 0 0 0-1.328 0l-1.5 1.333A1 1 0 0 0 18.5 19.2V22a1 1 0 1 0 2 0v-2.8a1 1 0 0 0 1.164-1.614l-1.5-1.333Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconWalletFundOutline)
export default Memo
