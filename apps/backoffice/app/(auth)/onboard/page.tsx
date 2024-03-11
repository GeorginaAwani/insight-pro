"use client"
import React from "react"
import { Button, TextInput } from "@repo/ui/components"

const Onboard = () => {
  return (
    <div className="mb-[82px]">
      <div className="flex flex-col gap-8">
        <h1 className="text-brand-600 text-[2rem] font-semibold leading-8 font-body">
          First, tell us a bit about yourself
        </h1>
        <div className="flex flex-col gap-4">
          <form className="flex w-full flex-col gap-4">
            <TextInput
              size="md"
              label="What’s your full name?"
              fullWidth
              required
              placeholder="e.g. John Doe"
            />

            <TextInput
              size="md"
              label="What's the name of your church?"
              fullWidth
              required
              placeholder="e.g Church of God International"
            />
            <TextInput
              size="md"
              label="Position held"
              fullWidth
              required
              placeholder="Select a role"
            />
            <TextInput
              size="md"
              label="Number of members"
              fullWidth
              required
              placeholder="Select a role"
            />

            <Button
              variant="primary"
              fullWidth
              className="rounded-full"
              size="xl"
              type="submit"
              leftIconClassName="mr-3"
              variantType="contained">
              Finish
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Onboard
