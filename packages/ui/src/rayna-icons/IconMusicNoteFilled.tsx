import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconMusicNoteFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M14.06 2.476a1 1 0 0 0-1.226.974v11.437c-.682-.213-1.562-.37-2.678-.37-1.615 0-2.737.328-3.477.683-.84.403-1.032 1.428-.62 2.294.765 1.613 2.223 4.024 4.097 4.024 2.586 0 4.38-2.294 4.656-4.776.004-.036.007-.071.008-.106.016-.118.024-.244.013-.373V9.96c2.8-.406 3.74-2.842 3.854-4.115-.441-.238-1.366-.967-2.279-1.686-.717-.565-1.426-1.124-1.888-1.434a.999.999 0 0 0-.46-.248Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconMusicNoteFilled)
export default Memo
