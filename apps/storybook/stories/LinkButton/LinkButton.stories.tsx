import { LinkButton } from "@repo/ui/components"
import type { Meta, StoryObj } from "@storybook/react"
const meta: Meta<typeof LinkButton> = {
  title: "Components/Buttons/LinkButton",
  component: LinkButton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      description: "Button size",
      name: "Size"
    },
    variant: {
      description: "Button theme",
      name: "Variant"
    },
    disabled: {
      description: "controls button disabled state",
      defaultValue: false,
      type: "boolean"
    },
    underline: {
      defaultValue: false,
      description: "Controls button underline styles"
    },
    children: {
      description: "Button text",
      defaultValue: "",
      type: "string"
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Gray: Story = {
  name: "Gray",
  args: {
    variant: "gray",
    underline: false,
    size: "sm",
    children: "Link Button",
    href: "#"
  }
}

export const GrayWithUnderline: Story = {
  name: "Gray With Underline",
  args: {
    variant: "gray",
    underline: true,
    size: "sm",
    children: "Link Button",
    href: "#"
  }
}

export const Black: Story = {
  name: "Black",
  args: {
    variant: "black",
    underline: false,
    size: "sm",
    children: "Link Button",
    href: "#"
  }
}

export const BlackWithUnderline: Story = {
  name: "Black With Underline",
  args: {
    variant: "black",
    underline: true,
    size: "sm",
    children: "Link Button",
    href: "#"
  }
}

export const Brand: Story = {
  name: "Brand",
  args: {
    variant: "brand",
    underline: false,
    size: "sm",
    children: "Link Button",
    href: "#"
  }
}

export const BrandWithUnderline: Story = {
  name: "Brand With Underline",
  args: {
    variant: "brand",
    underline: true,
    size: "sm",
    children: "Link Button",
    href: "#"
  }
}

export const Error: Story = {
  name: "Error",
  args: {
    variant: "error",
    underline: false,
    size: "sm",
    children: "Link Button",
    href: "#"
  }
}

export const ErrorWithUnderline: Story = {
  name: "Error With Underline",
  args: {
    variant: "error",
    underline: true,
    children: "Link Button",
    href: "#",
    size: "sm"
  }
}

export const Modifiable: Story = {
  name: "Modifiable",
  args: {
    variant: "modifiable",
    underline: false,
    size: "sm",
    children: "Link Button",
    href: "#"
  }
}

export const ModifiableWithUnderline: Story = {
  name: "Modifiable With Underline",
  args: {
    variant: "modifiable",
    underline: true,
    size: "sm",
    children: "Link Button",
    href: "#"
  }
}
