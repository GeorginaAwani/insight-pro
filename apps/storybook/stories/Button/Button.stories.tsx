import { Button } from "@repo/ui/components"
import type { Meta, StoryObj } from "@storybook/react"
import {
  IconChevronLeftOutline,
  IconChevronRightOutline
} from "@repo/ui/rayna-icons"
import React from "react"
const meta: Meta<typeof Button> = {
  title: "Components/Buttons/Button",
  component: Button,
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
    children: {
      description: "Button text",
      name: "Children"
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
    },
    leftIcon: {
      description: "This property specifies the icon on the left of the button",
      defaultValue: null
    },
    leftIconClassName: {
      description: "Extra styles to be added to the left icon",
      defaultValue: "",
      type: "string"
    },
    rightIcon: {
      defaultValue: null,
      description: "This property specifies the icon on the right of the button"
    },
    rightIconClassName: {
      description: "Extra styles to be added to the right icon",
      defaultValue: "",
      type: "string"
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  name: "Primary",
  args: {
    variant: "primary",
    children: "Button text",
    variantType: "contained",
    size: "xl",
    fullWidth: false
  },
  render: (args) => {
    if (args.leftIcon) {
      delete args.leftIcon
    }
    if (args.rightIcon) {
      delete args.rightIcon
    }
    return <Button {...args} />
  }
}

export const PrimaryWithLeftIcon: Story = {
  name: "Primary With Left Icon",
  args: {
    variant: "primary",
    children: "Button text",
    variantType: "contained",
    size: "xl",
    fullWidth: false
  },
  render: (args) => {
    if (args.leftIcon) {
      delete args.leftIcon
    }
    if (args.rightIcon) {
      delete args.rightIcon
    }
    return <Button leftIcon={<IconChevronLeftOutline />} {...args} />
  }
}

export const PrimaryWithRightIcon: Story = {
  name: "Primary With Right Icon",
  args: {
    variant: "primary",
    children: "Button text",
    variantType: "contained",
    size: "xl",
    fullWidth: false
  },
  render: (args) => {
    if (args.leftIcon) {
      delete args.leftIcon
    }
    if (args.rightIcon) {
      delete args.rightIcon
    }
    return <Button rightIcon={<IconChevronRightOutline />} {...args} />
  }
}

export const PrimaryWithBothIcons: Story = {
  name: "Primary With Both Icons",
  args: {
    variant: "primary",
    children: "Button text",
    variantType: "contained",
    size: "xl",
    fullWidth: false
  },
  render: (args) => {
    if (args.leftIcon) {
      delete args.leftIcon
    }
    if (args.rightIcon) {
      delete args.rightIcon
    }
    return (
      <Button
        rightIcon={<IconChevronRightOutline />}
        leftIcon={<IconChevronLeftOutline />}
        {...args}
      />
    )
  }
}

export const Secondary: Story = {
  name: "Secondary",
  args: {
    variant: "secondary",
    children: "Button text",
    variantType: "contained",
    size: "xl",
    fullWidth: false
  },
  render: (args) => {
    if (args.leftIcon) {
      delete args.leftIcon
    }
    if (args.rightIcon) {
      delete args.rightIcon
    }
    return <Button {...args} />
  }
}

export const SecondaryWithLeftIcon: Story = {
  name: "Secondary With Left Icon",
  args: {
    variant: "secondary",
    children: "Button text",
    variantType: "contained",
    size: "xl",
    fullWidth: false
  },
  render: (args) => {
    if (args.leftIcon) {
      delete args.leftIcon
    }
    if (args.rightIcon) {
      delete args.rightIcon
    }
    return <Button leftIcon={<IconChevronLeftOutline />} {...args} />
  }
}

export const SecondaryWithRightIcon: Story = {
  name: "Secondary With Right Icon",
  args: {
    variant: "secondary",
    children: "Button text",
    variantType: "contained",
    size: "xl",
    fullWidth: false
  },
  render: (args) => {
    if (args.leftIcon) {
      delete args.leftIcon
    }
    if (args.rightIcon) {
      delete args.rightIcon
    }
    return <Button rightIcon={<IconChevronRightOutline />} {...args} />
  }
}

export const SecondaryWithBothIcons: Story = {
  name: "Secondary With Both Icons",
  args: {
    variant: "secondary",
    children: "Button text",
    variantType: "contained",
    size: "xl",
    fullWidth: false
  },
  render: (args) => {
    if (args.leftIcon) {
      delete args.leftIcon
    }
    if (args.rightIcon) {
      delete args.rightIcon
    }
    return (
      <Button
        rightIcon={<IconChevronRightOutline />}
        leftIcon={<IconChevronLeftOutline />}
        {...args}
      />
    )
  }
}

export const Destructive: Story = {
  name: "Destructive",
  args: {
    variant: "destructive",
    children: "Button text",
    variantType: "contained",
    size: "xl",
    fullWidth: false
  },
  render: (args) => {
    if (args.leftIcon) {
      delete args.leftIcon
    }
    if (args.rightIcon) {
      delete args.rightIcon
    }
    return <Button {...args} />
  }
}
export const DestructiveWithLeftIcon: Story = {
  name: "Destructive With Left Icon",
  args: {
    variant: "destructive",
    children: "Button text",
    variantType: "contained",
    size: "xl",
    fullWidth: false
  },
  render: (args) => {
    if (args.leftIcon) {
      delete args.leftIcon
    }
    if (args.rightIcon) {
      delete args.rightIcon
    }
    return <Button leftIcon={<IconChevronLeftOutline />} {...args} />
  }
}

export const DestructiveWithRightIcon: Story = {
  name: "Destructive With Right Icon",
  args: {
    variant: "destructive",
    children: "Button text",
    variantType: "contained",
    size: "xl",
    fullWidth: false
  },
  render: (args) => {
    if (args.leftIcon) {
      delete args.leftIcon
    }
    if (args.rightIcon) {
      delete args.rightIcon
    }
    return <Button rightIcon={<IconChevronRightOutline />} {...args} />
  }
}

export const DestructiveWithBothIcons: Story = {
  name: "Destructive With Both Icons",
  args: {
    variant: "destructive",
    children: "Button text",
    variantType: "contained",
    size: "xl",
    fullWidth: false
  },
  render: (args) => {
    if (args.leftIcon) {
      delete args.leftIcon
    }
    if (args.rightIcon) {
      delete args.rightIcon
    }
    return (
      <Button
        rightIcon={<IconChevronRightOutline />}
        leftIcon={<IconChevronLeftOutline />}
        {...args}
      />
    )
  }
}
