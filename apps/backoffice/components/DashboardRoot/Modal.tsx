import { IconButton } from "@repo/ui/components"
import { IconMultipyOutline } from "@repo/ui/rayna-icons"
import React, { ReactNode } from "react"

interface ModalProps {
  title: string
  children: ReactNode
  size?: string
  onClose: () => void
  showTitle?: boolean
  showClose?: boolean
  [key: string]: any
}

const Modal: React.FC<ModalProps> = ({
  title,
  children,
  size = "xl",
  showTitle = true,
  showClose = true,
  onClose
}) => {
  return (
    <>
      <div
        className="relative z-50"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              className={`relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-${size} `}>
              <div className="bg-white p-5 sm:p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    {showTitle && (
                      <h1 className="text-lg font-semibold">{title}</h1>
                    )}
                  </div>
                  {showClose && (<IconButton variantType="ghost" variant="secondary">
                    <IconMultipyOutline
                      width={16}
                      height={16}
                      onClick={onClose}></IconMultipyOutline>
                  </IconButton>)}
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
