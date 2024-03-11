import React from "react"
import Logo from "/public/assets/Insite_Logo.svg"
import { IconSearchFilled } from "@repo/ui/rayna-icons"
import { IconChevronDown } from "@repo/ui/ungrouped-icons"
import avatarSample from "/public/images/avatar-sample.png"
import Image from "next/image"

const Header = () => {
  return (
    <header className="px-8 w-full py-2 flex justify-between items-center header-bg fixed top-0 left-0 z-30">
      <Logo />
      <div className="flex gap-8 items-center">
        <div className="flex gap-3.5 h-fiy items-center">
          <IconSearchFilled height={28} width={28} className="fill-white" />
          <input
            type="text"
            className="bg-transparent font-body text-white font-base leading-4 placeholder:text-white caret-white !outline-0 !border-0 w-18 p-0 focus:!border-0 focus:!outline-0 focus:!ring-0"
            placeholder="Search"
          />
        </div>
        <div className="p-2 flex gap-3 items-center justify-center rounded-2xl bg-[#ffffff30]">
          <div className="flex gap-2 items-center justify-center ">
            <Image
              src={avatarSample.src}
              alt="avatar image"
              width={avatarSample.width}
              height={avatarSample.height}
              className="w-10 h-10 aspect-square"
            />
            <span className="text-[#FFFCFC]">jsmith@gmail.com</span>
          </div>
          <IconChevronDown className="text-white" />
        </div>
      </div>
    </header>
  )
}

export default Header
