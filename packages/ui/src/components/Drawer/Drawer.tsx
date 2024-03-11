import React from "react"
import { IconChevronLeftOutline, IconMultipyFilled } from "../../rayna-icons"
import { cn } from "../../utils"

type props = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  header?: string
}

const Drawer = ({ isOpen, onClose, children, header }: props) => {
  const overlayClasses = `fixed inset-0 bg-black opacity-50 z-[1000] transition-opacity ${
    isOpen ? "visible" : "invisible"
  }`

  const drawerClasses = `fixed top-5 bottom-5 right-5 w-[465px] bg-white shadow-lg rounded-xl z-[1000] transform transition-transform ${
    isOpen ? "translate-x-0" : "translate-x-[105%]"
  }`

  return (
    <>
      {/* Overlay */}
      <div className={cn(overlayClasses)} onClick={onClose}></div>

      {/* Drawer */}
      <div className={cn(drawerClasses)}>
        {/* Close button */}
        <div
          className={`flex ${header ? "justify-between" : "justify-end"} p-4`}>
          {header && (
            <div className="flex flex-row items-center w-full gap-6">
              <IconChevronLeftOutline
                fill="#000"
                width={18}
                height={18}
                className="cursor-pointer"
              />

              <p className="text-lg font-semibold">{header}</p>
            </div>
          )}
          <button onClick={onClose}>
            <IconMultipyFilled fill="#000" width={20} height={20} />
          </button>
        </div>

        {/* Content */}
        <div>{children}</div>
      </div>
    </>
  )
}

export default Drawer
