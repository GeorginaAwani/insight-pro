import React from "react"

export const If = (props: {
  condition: boolean
  children: React.ReactNode
  fallback?: React.ReactNode
}) => {
  const { condition, children, fallback = null } = props
  return condition ? <>{children}</> : <>{fallback}</>
}
