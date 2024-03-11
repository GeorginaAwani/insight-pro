import React from "react"
import { useToast } from "@repo/shared/contexts"
import { Transition } from "@headlessui/react"
import {
  IconBellFilled,
  IconInfoCircleFilled,
  IconCheckCircleFilled,
  IconMultipyFilled
} from "../../rayna-icons"
import { If } from "../Utilities/If"
import { cn } from "../../utils"
import { IconAlertCircle, IconAlertTriangle } from "../../ungrouped-icons"
/**
 * To use this component, it has to be wrapped in the toast provider context from shared packages
 */
const Toast = () => {
  const {
    open,
    closeToast,
    color,
    primaryText,
    helpText,
    size,
    actionType,
    primaryAction,
    primaryActionText,
    secondaryAction,
    secondaryActionText
  } = useToast()

  switch (color) {
    case "default":
  }

  const icon = React.useMemo(() => {
    switch (color) {
      case "default":
        return (
          <IconBellFilled height={20} width={20} className="text-neutral-600" />
        )
      case "error":
        return (
          <IconAlertCircle height={20} width={20} className="text-red-500" />
        )
      case "info":
        return (
          <IconInfoCircleFilled
            height={20}
            width={20}
            className="text-blue-500"
          />
        )
      case "success":
        return (
          <IconCheckCircleFilled
            height={20}
            width={20}
            className="text-green-500"
          />
        )
      case "warning":
        return (
          <IconAlertTriangle
            height={20}
            width={20}
            className="text-orange-500"
          />
        )
      default:
        return null
    }
  }, [color])
  return (
    <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
      <Transition
        show={open}
        as={React.Fragment}
        enter="transform ease-out duration-300 transition"
        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enterTo="translate-y-0 opacity-100 sm:translate-x-0"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0">
        <div className="pointer-events-auto w-[min(343px,_100%)] md:w-[548px]  overflow-hidden rounded-md bg-white shadow-lg">
          <div className="pl-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-4">{icon}</div>
              <div className="ml-3 w-0 flex items-center justify-between flex-1 py-4 pr-4">
                <div>
                  <p
                    className={cn(
                      "text-sm font-body text-gray-900 font-semibold",
                      {
                        "font-normal": size === "sm"
                      }
                    )}>
                    {primaryText}
                  </p>
                  <If condition={!!helpText && size === "md"}>
                    <p className="mt-1 text-sm text-gray-600 font-body">
                      {helpText}
                    </p>
                  </If>
                  {size === "md" ? (
                    <div
                      className={cn("empty:hidden flex items-center gap-3", {
                        "mt-3": actionType === "link",
                        "mt-4": actionType === "button",
                        hidden: actionType === "split button" || ""
                      })}>
                      {primaryAction && primaryActionText ? (
                        <button
                          className={cn(
                            "font-body text-center text-sm flex items-center justify-center",
                            {
                              " text-brand-600 font-medium":
                                actionType === "link",
                              "rounded shadow-sm bg-brand-600 font-semibold text-white py-1 px-2.5":
                                actionType === "button"
                            }
                          )}
                          onClick={() => {
                            primaryAction()
                          }}>
                          {primaryActionText}
                        </button>
                      ) : null}

                      {secondaryAction && secondaryActionText ? (
                        <button
                          className={cn(
                            "font-body text-center text-sm flex items-center justify-center",
                            {
                              "text-neutral-600 font-medium":
                                actionType === "link",
                              "text-neutral-600 font-semibold py-1 px-2.5 rounded border border-solid border-neutral-300 bg-white":
                                actionType === "button"
                            }
                          )}
                          onClick={() => {
                            secondaryAction()
                          }}>
                          {secondaryActionText}
                        </button>
                      ) : null}
                    </div>
                  ) : null}
                </div>
                {primaryAction && primaryActionText ? (
                  <button
                    className={cn(
                      "font-body text-center text-sm flex items-center justify-center",
                      {
                        " text-brand-600 font-medium": actionType === "link",
                        "rounded shadow-sm bg-brand-600 font-semibold text-white py-1 px-2.5":
                          actionType === "button"
                      }
                    )}
                    onClick={() => {
                      primaryAction()
                    }}>
                    {primaryActionText}
                  </button>
                ) : null}
              </div>
              <If
                condition={actionType !== "" && actionType !== "split button"}>
                <div className="ml-4 flex flex-shrink-0 py-4 pr-4">
                  <button
                    type="button"
                    className="inline-flex rounded-md bg-white text-neutral-600 hover:text-neutral-500 "
                    onClick={() => {
                      closeToast()
                    }}>
                    <span className="sr-only">Close</span>
                    <IconMultipyFilled
                      height={20}
                      width={20}
                      aria-hidden="true"
                      className="text-neutral-600"
                    />
                  </button>
                </div>
              </If>

              {size === "md" && actionType === "split button" ? (
                <div className="flex border-l h-full border-l-solid border-neutral-300">
                  <div className="flex flex-col divide-y divide-neutral-300">
                    {primaryAction && primaryActionText ? (
                      <div className="flex h-0 flex-1">
                        <button
                          type="button"
                          className="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-brand-600 "
                          onClick={() => {
                            primaryAction()
                          }}>
                          {primaryActionText}
                        </button>
                      </div>
                    ) : null}
                    {secondaryAction && secondaryActionText ? (
                      <div className="flex h-0 flex-1">
                        <button
                          type="button"
                          className="flex w-full font-body items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-neutral-600"
                          onClick={() => {
                            secondaryAction()
                          }}>
                          {secondaryActionText}
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  )
}

export default Toast
