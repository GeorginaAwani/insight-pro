import "@total-typescript/ts-reset"

declare module "react" {
  export interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}
declare global {
  interface Window {
    Clerk: any
  }
}
