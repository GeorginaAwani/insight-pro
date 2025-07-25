import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconTissueOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M10.5 4.5c.674 0 1.333.134 1.861.398.469.235 1.139.743 1.139 1.602 0 .859-.67 1.367-1.139 1.602-.528.264-1.187.398-1.861.398-.674 0-1.333-.134-1.861-.398C8.17 7.867 7.5 7.359 7.5 6.5c0-.859.67-1.367 1.139-1.602.528-.264 1.187-.398 1.861-.398Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 6.5V9h1a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-9.5c-2.184 0-4.21-.411-5.726-1.119C3.338 20.211 2 19.086 2 17.5v-11c0-1.586 1.338-2.711 2.774-3.381C6.29 2.41 8.316 2 10.5 2s4.21.411 5.726 1.119C17.662 3.789 19 4.914 19 6.5Zm-15 0c0-.347.341-.972 1.62-1.569C6.817 4.373 8.54 4 10.5 4s3.683.373 4.88.931C16.66 5.528 17 6.153 17 6.5s-.341.972-1.62 1.569C14.183 8.627 12.46 9 10.5 9s-3.683-.373-4.88-.931C4.34 7.472 4 6.847 4 6.5Zm0 11V9.466c.25.153.51.292.774.415C6.29 10.59 8.316 11 10.5 11H20a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-9.5c-1.959 0-3.683-.372-4.88-.931C4.34 18.472 4 17.847 4 17.5Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconTissueOutline)
export default Memo
