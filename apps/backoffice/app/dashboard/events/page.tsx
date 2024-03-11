"use client"
import { Button } from "@repo/ui/components"
import { IconEmptyState } from "@repo/ui/ungrouped-icons"
import React from "react"
import EventDrawer from "../../../components/EventComponents/EventDrawer"

const Events = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false)

  const openDrawer = () => {
    setIsDrawerOpen(true)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }
  return (
    <div className="px-8 h-full">
      <EventDrawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />

      <div className="header pt-8 pb-5 flex flex-row justify-between align-middle border-bottom border-b-2">
        <p className="text-3xl">Events & Programs</p>

        <Button
          variant="primary"
          variantType="contained"
          className="rounded-3xl">
          Create Event
        </Button>
      </div>

      <div className="flex flex-col justify-center h-[505px]">
        <div className="mx-auto flex flex-col items-center ">
          <IconEmptyState className=" w-24 h-24" />
          <p className=" text-[20px] mt-6">You haven’t added any events yet</p>
          <p className="text-base text-[16px] text-neutral-500 mt-0 ">
            Start by creating a one-time or recurring event{" "}
          </p>
          <Button
            variant="primary"
            variantType="contained"
            className="rounded-3xl mt-6"
            onClick={() => {
              console.log("button clicked to create new event")
            }}>
            Create new event
          </Button>
        </div>
      </div>

      <button onClick={openDrawer} className="">
        Open Drawer
      </button>
    </div>
  )
}

export default Events
