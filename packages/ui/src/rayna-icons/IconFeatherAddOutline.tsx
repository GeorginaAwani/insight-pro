import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconFeatherAddOutline = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21.996 2.91a1 1 0 0 0-1.03-.91c-6.184.214-10.486 3.473-13.313 7.376-2.81 3.878-4.208 8.44-4.643 11.483a1 1 0 0 0 1.947.432c.084-.277.17-.566.258-.863.549-1.854 1.194-4.034 2.214-5.626.581-.906 1.211-1.5 1.898-1.759.65-.245 1.514-.254 2.726.351 1.217.61 2.721.183 3.547-.871.624-.798.813-1.843.488-2.989 1.19-.027 2.457-.2 3.518-.782a4.368 4.368 0 0 0 1.953-2.153c.424-.986.572-2.207.437-3.69Zm-9.049 8.696c-1.473-.737-2.828-.898-4.044-.53.12-.177.243-.353.37-.527 2.404-3.319 5.88-6.009 10.77-6.485-.013.756-.139 1.321-.32 1.744a2.37 2.37 0 0 1-1.079 1.19c-1.01.554-2.48.588-4.091.503a1 1 0 0 0-.885 1.554c.836 1.254.578 1.953.357 2.235-.3.383-.795.457-1.078.316Z"
      fill="currentColor"
    />
    <path
      d="M5 3a1 1 0 1 0-2 0v1H2a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0V6h1a1 1 0 1 0 0-2H5V3Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconFeatherAddOutline)
export default Memo
