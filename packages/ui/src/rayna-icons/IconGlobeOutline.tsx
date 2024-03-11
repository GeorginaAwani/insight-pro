import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconGlobeOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1ZM4.16 11.302l-1.16.58a8.961 8.961 0 0 1 2-5.54V8.36l-.84 2.942ZM7 4.516a9 9 0 0 1 13.991 7.08l-3.446 3.445-.49 4.406a9.003 9.003 0 0 1-13.831-5.441l2.617-1.308.376-1.318a2 2 0 0 0 1.077 2.135l2.246 1.123.235 3.52c.133 1.993 2.785 2.58 3.748.83l3.634-6.607a2 2 0 0 0 .125-1.653l-.84-2.288a2 2 0 0 0-2.222-1.281l-4.581.801a2 2 0 0 0-1.07.556l-1.795 1.796a1.995 1.995 0 0 0-.44.662L7 8.64V4.516Zm12.455 11.443 1.072-1.072a8.973 8.973 0 0 1-1.215 2.362l.143-1.29Zm-9.02-3.11-2.247-1.123 1.796-1.795 4.58-.802.84 2.288-3.633 6.607-.235-3.519a2 2 0 0 0-1.101-1.656Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconGlobeOutline)
export default Memo
