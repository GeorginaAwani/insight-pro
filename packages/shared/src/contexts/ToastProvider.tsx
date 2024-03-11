import React from "react"
import { useTimeout } from "@mantine/hooks"

interface ToastProps {
  open: boolean
  size: "md" | "sm"
  primaryAction?: () => void
  primaryActionText?: string
  actionType: "link" | "button" | "split button" | ""
  color: "default" | "success" | "info" | "error" | "warning" | ""
  secondaryAction?: () => void
  secondaryActionText?: string
  primaryText: string
  helpText?: string
  closeDelay: number
  openToast: (
    params: Partial<ToastProps> & {
      primaryText: string
      color: ToastProps["color"]
    }
  ) => void
  closeToast: () => void
}

const initial: ToastProps = {
  open: false,
  size: "sm",
  primaryAction() {
    return null
  },
  primaryActionText: "",
  secondaryAction() {
    return null
  },
  secondaryActionText: "",
  color: "",
  actionType: "",
  primaryText: "",
  helpText: "",
  closeDelay: 5000,
  openToast(params) {
    return null
  },
  closeToast() {
    return null
  }
}
const ToastContext = React.createContext<ToastProps>({
  ...initial
})

const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toastState, setToastState] =
    React.useState<Omit<ToastProps, "openToast" | "closeToast">>(initial)

  const { start, clear } = useTimeout(() => {
    console.log(3)
    closeToast()
  }, toastState.closeDelay)
  const openToast = (
    params: Omit<
      Partial<ToastProps>,
      "openToast" | "primaryText" | "color" | "closeToast" | "open"
    > & {
      primaryText: string
      color: ToastProps["color"]
    }
  ) => {
    const {
      closeDelay: cD = 5000,
      size: sz = "sm",
      primaryText: pt,
      color: c,
      helpText: hT = "",
      primaryActionText: pAT,
      secondaryActionText: sAT,
      actionType: aT,
      primaryAction: pA,
      secondaryAction: sA
    } = params

    setToastState({
      closeDelay: cD,
      size: sz,
      open: true,
      primaryAction: pA,
      primaryActionText: pAT,
      secondaryAction: sA,
      secondaryActionText: sAT,
      actionType: aT ? aT : "",
      helpText: hT,
      primaryText: pt,
      color: c
    })

    start()
  }

  const closeToast = () => {
    setToastState(initial)
    clear()
  }
  React.useEffect(() => {
    return () => {
      clear()
    }
  }, [])
  return (
    <ToastContext.Provider
      value={{
        ...toastState,
        openToast,
        closeToast
      }}>
      {children}
    </ToastContext.Provider>
  )
}

const useToast = () => React.useContext(ToastContext)

export { useToast, ToastProvider }
