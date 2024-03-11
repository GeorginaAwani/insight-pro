"use client"
import React from "react"
import DashboardRoot from "../../components/DashboardRoot/DashboardRoot"

const layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <DashboardRoot>{children}</DashboardRoot>
}

export default layout
