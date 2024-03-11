import { Button, ButtonProps } from "@repo/ui/components"
import { IconChevronVOutline } from "@repo/ui/rayna-icons"
import { cn } from "@repo/ui/ui-utils"
import React, { useState } from "react"
import {
  BtnVariantType,
  BtnVariants
} from "../../../../packages/ui/src/components/Button/button-styles"
;("use client")

interface MenuItem {
  variant: BtnVariants
  variantType: BtnVariantType
  value: string
  className?: string
  children?: React.ReactNode
}

const SelectComboBox: React.FC<{
  text: string
  icon?: React.JSX.Element
  items: MenuItem[]
}> = ({ text, items, icon = <IconChevronVOutline></IconChevronVOutline> }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState("")

  const toggleState = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={toggleState}>
            {selected === "" && text}
            {selected !== "" && selected}
            {icon}
          </button>
        </div>

        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}>
          <div className="py-1" role="none">
            {items.map((item) => {
              return (
                <Button
                  variant={item.variant}
                  variantType={item.variantType}
                  onClick={() => {
                    setSelected(item.value)
                  }}
                  fullWidth={true}
                  className={cn(
                    "font-normal rounded-0 py-2 px-4",
                    item.className
                  )}>
                  {item.children || item.value}
                </Button>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default SelectComboBox
