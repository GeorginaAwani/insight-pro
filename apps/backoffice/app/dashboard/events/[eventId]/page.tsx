import React from "react"
const page = ({
  params
}: {
  params: {
    eventId: string
  }
}) => {
  return <div>{params.eventId}</div>
}

export default page
