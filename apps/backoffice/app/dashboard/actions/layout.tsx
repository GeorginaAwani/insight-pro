import React from "react"

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#fff] h-full rounded-xl overflow-x-hidden overflow-y-auto">
      {children}
    </div>
  )
}

export default layout
