import { Button } from "@repo/ui/components"
import { IconEmptySlate } from "@repo/ui/ungrouped-icons"
import React from "react"

const DataLess = ({
  title,
  text,
  children,
  primaryButton
}: {
  title: string
  text: string
  children?: React.ReactNode
  primaryButton: {
    icon: React.ReactElement
    text: string
    props?: React.ButtonHTMLAttributes<HTMLButtonElement>
  }
}) => {
  return (
    <div className="p-2 flex justify-center items-center text-center">
      <div className="flex flex-col justify-center items-center">
        <div>
          <IconEmptySlate height={72} width={84}></IconEmptySlate>
        </div>

        <div className="my-5">
          <h1 className="text-xl font-normal text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600">{text}</p>
        </div>

        <div className="flex justify-center items-center">
          <Button
            leftIcon={React.cloneElement(primaryButton.icon)}
            variant="primary"
            variantType="contained"
            className="rounded-full"
            {...primaryButton.props}>
            {primaryButton.text}
          </Button>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DataLess
