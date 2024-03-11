import * as React from "react"
import { SVGProps, memo } from "react"
const SvgIconCameraSlashOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path
      d="M22.707 1.293a1 1 0 0 1 0 1.414l-20 20a1 1 0 0 1-1.414-1.414l20-20a1 1 0 0 1 1.414 0ZM12 8c.363 0 .718.039 1.06.112L11 10.17a3.008 3.008 0 0 0-1.83 1.831L7.111 14.06A5 5 0 0 1 12 8ZM12 16c-.35 0-.688-.06-1-.17l-1.502 1.5a5 5 0 0 0 6.832-6.832L14.83 12A3 3 0 0 1 12 16ZM17.546 10.041a.448.448 0 0 1-.823.064L18.46 8.37a.448.448 0 0 1-.064.822c-.4.134-.715.449-.85.85Z"
      fill="currentColor"
    />
    <path
      d="m16.586 3.672.457.457-1.414 1.414-.457-.457a2 2 0 0 0-1.415-.586h-3.514a2 2 0 0 0-1.415.586l-.685.686a4 4 0 0 1-1.343.885L4.257 7.674A2 2 0 0 0 3 9.531V17.5a2 2 0 0 0 .087.585l-1.501 1.5A3.98 3.98 0 0 1 1 17.5V9.531a4 4 0 0 1 2.514-3.714L6.057 4.8a2 2 0 0 0 .671-.443l.686-.685A4 4 0 0 1 10.243 2.5h3.514a4 4 0 0 1 2.829 1.172ZM19 19.5H7.328l-2 2H19a4 4 0 0 0 4-4V9.531a4 4 0 0 0-2.154-3.549l-1.524 1.524.42.168A2 2 0 0 1 21 9.531V17.5a2 2 0 0 1-2 2Z"
      fill="currentColor"
    />
  </svg>
)
const Memo = memo(SvgIconCameraSlashOutline)
export default Memo
