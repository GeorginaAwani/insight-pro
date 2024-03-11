import { IconButton } from "@repo/ui/components"
import type { Meta, StoryObj } from "@storybook/react"
import { Icon3DFilled } from "@repo/ui/rayna-icons"
import React from "react"
const meta: Meta<typeof IconButton> = {
  title: "Components/Buttons/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Button theme",
      defaultValue: "primary",
      name: "Variant"
    },
    variantType: {
      description: "Specific theme styles to be added",
      name: "Variant Type"
    },

    size: {
      description: "Button size",
      defaultValue: "xl",
      name: "Size"
    },
    fullWidth: {
      description:
        "This property determines if the button occupies the full width of its parent container",
      defaultValue: false,
      name: "Full width"
    },
    className: {
      description: "Extra styles to be applied to the button root",
      defaultValue: "",
      type: "string"
    },
    loading: {
      description: "Controls button loading state",
      defaultValue: false,
      type: "boolean"
    },
    disabled: {
      description: "controls button disabled state",
      defaultValue: false,
      type: "boolean"
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  name: "Primary",
  args: {
    variant: "primary",
    variantType: "contained",
    size: "xl",
    fullWidth: false
  },
  render: (args) => {
    return (
      <IconButton {...args}>
        <Icon3DFilled />
      </IconButton>
    )
  }
}

export const Secondary: Story = {
  name: "Secondary",
  args: {
    variant: "secondary",
    variantType: "contained",
    size: "xl",
    fullWidth: false
  },
  render: (args) => {
    return (
      <IconButton {...args}>
        <Icon3DFilled />
      </IconButton>
    )
  }
}

export const Destructive: Story = {
  name: "Destructive",
  args: {
    variant: "destructive",
    variantType: "contained",
    size: "xl",
    fullWidth: false
  },
  render: (args) => {
    return (
      <IconButton {...args}>
        <Icon3DFilled />
      </IconButton>
    )
  }
}
