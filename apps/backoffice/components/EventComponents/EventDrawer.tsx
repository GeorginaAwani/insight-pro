import { Drawer } from "@repo/ui/components"
import React, { useState } from "react"
import eventBanner from "/public/images/event-banner.png"
import Image from "next/image"
import {
  IconChevronDownOutline,
  IconChevronRightOutline,
  IconClockOutline,
  IconInfoCircleOutline,
  IconListAddOutline,
  IconLockOutline,
  IconMapMarkerOutline,
  IconUserAddOutline
} from "@repo/ui/rayna-icons"

import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const EventDrawer = ({
  isDrawerOpen,
  closeDrawer
}: {
  isDrawerOpen: boolean
  closeDrawer: () => void
}) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date())

  const [isChecked, setChecked] = useState(false)

  const toggleSwitch = () => {
    setChecked(!isChecked)
  }

  const formatDate = (date: Date | null) => {
    if (!date) return
    const formattedTime = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    }).format(date)
    return formattedTime
  }

  return (
    <Drawer isOpen={isDrawerOpen} onClose={closeDrawer} header="Add an Event">
      <div className="banner relative">
        <Image
          src={eventBanner.src}
          alt="avatar image"
          width={eventBanner.width}
          height={eventBanner.height}
          className="w-full h-[172px]"
        />
        <button className="absolute bottom-4 left-6 bg-[rgba(255,255,255,0.7)] px-2 py-1 flex flex-row justify-between items-center">
          <p className="">Choose a banner</p>

          <IconChevronDownOutline height={12} width={12} className="ml-3" />
        </button>
      </div>

      <div className=" form-group pl-6 pr-10 py-6">
        <div className="title flex flex-row gap-4 items-start">
          <IconListAddOutline height={24} width={24} />

          <div className="w-full">
            <label htmlFor="title">
              Title<span className="text-brand-600">*</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Add Title"
              className="block mt-1 shadow-sm shadow-brand-100 focus:ring-brand-500 focus:border-brand-500 w-full sm:text-sm border-neutral-300 rounded-md"
            />
          </div>
        </div>

        {/* TODO install react-datepicker and fix this */}
        <div className="title flex flex-row gap-4 items-start mt-4">
          <IconClockOutline height={24} width={24} />

          <div className="w-full">
            <div className="flex gap-2 items-center">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={
                  <button className="text-sm w-fit focus:outline-none focus:shadow-none  border-0 border-transparent">
                    {startDate &&
                      startDate.toUTCString().split(" ").slice(0, 3).join(" ")}
                  </button>
                }
              />
              <div className="flex gap-1 items-center">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  renderCustomHeader={() => {
                    return null
                  }}
                  customInput={
                    <button className="text-sm w-fit focus:outline-none focus:shadow-none  border-0 border-transparent">
                      {startDate && formatDate(startDate)}
                    </button>
                  }
                />
                <IconChevronRightOutline height={12} width={12} />
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  showTimeSelectOnly
                  customInput={
                    <button className="text-sm w-fit focus:outline-none focus:shadow-none  border-0 border-transparent">
                      {startDate && formatDate(startDate)}
                    </button>
                  }
                />
              </div>
            </div>
            <select
              id="event-repeats"
              name="event-repeats"
              className="block  mt-1 pl-0 focus:outline-none focus:ring-0 focus:border-none text-sm border-0 rounded-md">
              <option value="Does not repeat">Does not repeat</option>
              <option value="Does not repeat">Does not repeat</option>
              <option value="Does not repeat">Does not repeat</option>
              <option value="Does not repeat">Does not repeat</option>
            </select>
          </div>
        </div>

        <div className="title flex flex-row gap-4 items-center mt-4 ">
          <IconMapMarkerOutline fill="#000" height={24} width={24} />

          <input
            type="text"
            name="title"
            placeholder="Add Location"
            className="border-none shadow-sm shadow-brand-600 focus:ring-brand-500 w-full sm:text-sm border-neutral-300 rounded-md"
          />
        </div>
        <div className="title flex flex-row gap-4 items-center mt-4 ">
          <IconListAddOutline fill="#000" height={24} width={24} />

          <input
            type="text"
            name="title"
            placeholder="Add Description"
            className="border-none shadow-sm shadow-brand-600 focus:ring-brand-500 w-full sm:text-sm border-neutral-300 rounded-md"
          />
        </div>
        <div className="title flex flex-row gap-4 items-center mt-4 ">
          <IconUserAddOutline fill="#000" height={24} width={24} />

          <input
            type="text"
            name="title"
            placeholder="Add hosts/artists"
            className="border-none shadow-sm shadow-brand-600 focus:ring-brand-500 w-full sm:text-sm border-neutral-300 rounded-md"
          />
        </div>
      </div>

      <div className="footer">
        <div className="border-b-2 flex flex-row items-center justify-between pr-10">
          <div className="flex flex-row items-center gap-2 pl-6 pr-10 py-6">
            <IconLockOutline />
            <p>Require attendees to opt-in</p>
            <IconInfoCircleOutline />
          </div>

          <div className="flex items-center">
            <label htmlFor="toggle" className="cursor-pointer">
              <div
                className={`relative w-12 h-6 transition-colors duration-300 rounded-full ${
                  isChecked ? "bg-brand-500" : "bg-gray-300"
                }`}>
                <div
                  className={`absolute w-5 h-5 rounded-full top-[50%] left-[2px]  translate-y-[-50%] bg-white shadow-md transform transition-transform ${
                    isChecked ? "translate-x-6" : "translate-x-0"
                  }`}></div>
              </div>
            </label>
            <input
              type="checkbox"
              id="toggle"
              className="invisible w-0 h-0"
              checked={isChecked}
              onChange={toggleSwitch}
            />
          </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-4 p-6">
          <button
            className="text-neutral-500 flex-1 hover:text-neutral-700 border-[#D1D5DB] border-[1px] px-6 py-2 rounded-3xl"
            onClick={closeDrawer}>
            Cancel
          </button>
          <button className="bg-brand-600 flex-1 text-white px-6 py-2 rounded-3xl">
            Save
          </button>
        </div>
      </div>
    </Drawer>
  )
}

export default EventDrawer
