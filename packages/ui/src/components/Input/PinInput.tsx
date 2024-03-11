import React from "react"
import { cn } from "../../utils"
import { If } from "../Utilities/If"

export type PinInputProps = {
  onChange: (pin: string) => void
  token: string
  size?: "sm" | "md" | "lg"
  length?: 4 | 6
  required?: boolean
  label?: string
  hint?: string
  hintIcon?: React.ReactElement
  labelIcon?: React.ReactElement
  errorMessage?: string
  disabled?: boolean
  inputClassName?: string
  inputContainerClassName?: string
  rootClassName?: string
  labelIconClassName?: string
  hintIconClassName?: string
}

export const PinInput: React.FC<PinInputProps> = (props) => {
  const {
    onChange,
    length = 6,
    size = "md",
    token,
    label,
    required,
    hint,
    errorMessage,
    disabled,
    inputClassName,
    inputContainerClassName,
    rootClassName,
    labelIcon,
    labelIconClassName
  } = props
  const input = React.useRef(Array(length).fill("")).current
  const [values, setValues] = React.useState<string[]>(() =>
    token ? token.slice(0, length).split("") : input
  )

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    const newValues = [...values]
    const index = Number(name)

    if (index >= 0 && index < length) {
      newValues[index] = value
      setValues(newValues)
      onChange(newValues.join(""))

      if (index < length - 1) {
        const nextInput = document.getElementsByName(
          (index + 1).toString()
        )[0] as HTMLInputElement
        nextInput.focus()
      }
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event
    const { name } = event.target as HTMLInputElement

    if (key.toLowerCase() === "backspace" && Number(name)) {
      const newValues = [...values]
      newValues[Number(name)] = ""
      setValues(newValues)

      const previousInput = document.getElementsByName(
        (Number(name) - 1).toString()
      )[0] as HTMLInputElement
      previousInput.focus()
    }
  }

  return (
    <div className={cn("flex flex-col gap-1.5", rootClassName)}>
      <If condition={!!label}>
        <div className="inline-flex gap-[1px] items-center">
          <label className="font-body capitalize  text-neutral-900 text-sm font-medium">
            {label}
            <If
              condition={!!required}
              fallback={
                <span className="text-neutral-500 font-normal">(Optional)</span>
              }>
              <sup className="text-brand-600">*</sup>
            </If>
          </label>
          {labelIcon
            ? React.cloneElement(labelIcon, {
                height: 16,
                width: 16,
                className: cn("text-neutral-600", labelIconClassName)
              })
            : null}
        </div>
      </If>
      <div
        className={cn(
          "grid grid-cols-6 justify-between gap-2 w-full",
          {
            "gap-1.5": size === "sm",
            "grid-cols-4": length === 4
          },
          inputContainerClassName
        )}>
        {input.map((_, i) => (
          <input
            type="text"
            name={i.toString()}
            value={values[i]}
            key={i}
            required={required}
            disabled={disabled}
            maxLength={1}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className={cn(
              "font-body text-neutral-900 text-2xl leading-6 tracking-[0.24px] text-center rounded-lg border border-solid border-neutral-300 bg-white placeholder:text-neutral-400 focus-visible:border-2 focus-visible:border-brand-500 focus-visible:ring-4  focus-visible:ring-brand-100 disabled:border-neutral-200 disabled:text-neutral-400 disabled:bg-neutral-100 basis-[calc(17%)]",
              {
                "h-16 py-0.5 px-2": size === "sm",
                "rounded-[10px] h-20 p-2": size === "md",
                "rounded-xl py-3 px-2 h-24": size === "lg",
                "border-2 border-brand-500": !!values[i],
                "border-red-400 border-1 focus-visible:border-red-400 focus-visible:ring-4 focus-visible:ring-red-100":
                  !!errorMessage
              },
              inputClassName
            )}
          />
        ))}
      </div>
      {errorMessage ? (
        <p className="font-body text-sm text-red-400">{errorMessage}</p>
      ) : hint ? (
        <p className="font-body text-sm text-neutral-500">{hint}</p>
      ) : null}
    </div>
  )
}
