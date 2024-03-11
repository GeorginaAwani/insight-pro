import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconNftProfileOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 6.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.176 2a3 3 0 0 0-2.622 1.543l-3.89 7a3 3 0 0 0 0 2.914l3.89 7A3 3 0 0 0 8.176 22h7.646a3 3 0 0 0 2.623-1.543l3.889-7a3 3 0 0 0 0-2.914l-3.89-7A3 3 0 0 0 15.823 2H8.176Zm-.874 2.514A1 1 0 0 1 8.176 4h7.646a1 1 0 0 1 .875.514l3.888 7a1 1 0 0 1 0 .972L18.021 17.1c-.376-.219-.85-.48-1.38-.742-1.28-.632-3.053-1.35-4.636-1.359-1.475-.009-3.107.595-4.356 1.175-.653.303-1.24.618-1.697.88l-2.539-4.57a1 1 0 0 1 0-.97l3.889-7Zm8.454 13.639c.499.246.944.492 1.294.697l-.354.636a1 1 0 0 1-.874.514H8.176a1 1 0 0 1-.874-.514l-.379-.682c.42-.241.964-.534 1.568-.815 1.197-.556 2.492-.995 3.502-.989 1.097.006 2.518.538 3.763 1.153Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconNftProfileOutline)
export default Memo
