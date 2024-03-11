import React from "react"
import Aside from "./Aside"
import Header from "./Header"

const DashboardRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="bg-neutral-100 flex min-h-[calc(100vh-72px)] top-18 relative w-full overflow-x-hidden">
        <aside className="bg-neutral-100 fixed left-0 pl-6 py-6 h-[calc(100vh-72px)] max-h-[56.5rem] overflow-y-scroll hide-scroll-bar">
          <Aside />
        </aside>

        <main className="bg-neutral-100 relative left-[304px] w-[calc(100vw-304px)] min-h-full py-6 pl-6 pr-8">
          <div className="max-w-[1440px] h-full mx-auto">{children}</div>
        </main>
      </div>
    </>
  )
}

export default DashboardRoot
