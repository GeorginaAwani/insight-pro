import { ButtonGroup } from "@repo/ui/components"
import { Icon3DFilled } from "@repo/ui/rayna-icons"
import type { Meta, StoryObj } from "@storybook/react"
import React from "react"

const meta: Meta<typeof ButtonGroup.Wrapper> = {
  title: "Components/Buttons/ButtonGroup",
  component: ButtonGroup.Wrapper,

  parameters: {
    layout: "centered",
    docs: {
      source: {
        code: null
      }
    }
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      name: "Children",
      description: "ButtonGroup.Button elements",
      defaultValue: null
    },
    spacing: {
      defaultValue: "collapse"
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryButtonGroupWithTextButton: Story = {
  name: "Primary Button Group With Text Button",
  args: {
    spacing: "space"
  },
  render: (args) => {
    return (
      <ButtonGroup.Wrapper {...args}>
        <ButtonGroup.Button variant="primary" buttonType="text" size="xl">
          Button
        </ButtonGroup.Button>
        <ButtonGroup.Button variant="primary" buttonType="text" size="xl">
          Button
        </ButtonGroup.Button>
        <ButtonGroup.Button
          variant="primary"
          disabled
          buttonType="text"
          size="xl">
          Button
        </ButtonGroup.Button>
      </ButtonGroup.Wrapper>
    )
  }
}

export const PrimaryButtonGroupWithIconButton: Story = {
  name: "Primary Button Group With Icon Button",
  args: {
    spacing: "space"
  },
  render: (args) => {
    return (
      <ButtonGroup.Wrapper {...args}>
        <ButtonGroup.Button variant="primary" buttonType="icon" size="xl">
          <Icon3DFilled height={20} width={20} />
        </ButtonGroup.Button>
        <ButtonGroup.Button variant="primary" buttonType="icon" size="xl">
          <Icon3DFilled height={20} width={20} />
        </ButtonGroup.Button>
        <ButtonGroup.Button
          variant="primary"
          disabled
          buttonType="icon"
          size="xl">
          <Icon3DFilled height={20} width={20} />
        </ButtonGroup.Button>
      </ButtonGroup.Wrapper>
    )
  }
}

export const SecondaryButtonGroupWithTextButton: Story = {
  name: "Secondary Button Group With Text Button",
  args: {
    spacing: "space"
  },
  render: (args) => {
    return (
      <ButtonGroup.Wrapper {...args}>
        <ButtonGroup.Button variant="secondary" buttonType="text" size="xl">
          Button
        </ButtonGroup.Button>
        <ButtonGroup.Button variant="secondary" buttonType="text" size="xl">
          Button
        </ButtonGroup.Button>
        <ButtonGroup.Button
          variant="secondary"
          disabled
          buttonType="text"
          size="xl">
          Button
        </ButtonGroup.Button>
      </ButtonGroup.Wrapper>
    )
  }
}

export const SecondaryButtonGroupWithIconButton: Story = {
  name: "Secondary Button Group With Icon Button",
  args: {
    spacing: "space"
  },
  render: (args) => {
    return (
      <ButtonGroup.Wrapper {...args}>
        <ButtonGroup.Button variant="secondary" buttonType="icon" size="xl">
          <Icon3DFilled height={20} width={20} />
        </ButtonGroup.Button>
        <ButtonGroup.Button variant="secondary" buttonType="icon" size="xl">
          <Icon3DFilled height={20} width={20} />
        </ButtonGroup.Button>
        <ButtonGroup.Button
          variant="secondary"
          disabled
          buttonType="icon"
          size="xl">
          <Icon3DFilled height={20} width={20} />
        </ButtonGroup.Button>
      </ButtonGroup.Wrapper>
    )
  }
}

export const GhostButtonGroupWithTextButton: Story = {
  name: "Ghost Button Group With Text Button",
  args: {
    spacing: "space"
  },
  render: (args) => {
    return (
      <ButtonGroup.Wrapper {...args}>
        <ButtonGroup.Button variant="ghost" buttonType="text" size="xl">
          Button
        </ButtonGroup.Button>
        <ButtonGroup.Button variant="ghost" buttonType="text" size="xl">
          Button
        </ButtonGroup.Button>
        <ButtonGroup.Button
          variant="ghost"
          disabled
          buttonType="text"
          size="xl">
          Button
        </ButtonGroup.Button>
      </ButtonGroup.Wrapper>
    )
  }
}

export const GhostButtonGroupWithIconButton: Story = {
  name: "Ghost Button Group With Icon Button",
  args: {
    spacing: "space"
  },
  render: (args) => {
    return (
      <ButtonGroup.Wrapper {...args}>
        <ButtonGroup.Button variant="ghost" buttonType="icon" size="xl">
          <Icon3DFilled height={20} width={20} />
        </ButtonGroup.Button>
        <ButtonGroup.Button variant="ghost" buttonType="icon" size="xl">
          <Icon3DFilled height={20} width={20} />
        </ButtonGroup.Button>
        <ButtonGroup.Button
          variant="ghost"
          disabled
          buttonType="icon"
          size="xl">
          <Icon3DFilled height={20} width={20} />
        </ButtonGroup.Button>
      </ButtonGroup.Wrapper>
    )
  }
}

export const CollapsedButtonGroupWithTextButton: Story = {
  name: "Collapsed Button Group With Text Button",
  args: {
    spacing: "collapse"
  },
  render: (args) => {
    return (
      <ButtonGroup.Wrapper {...args}>
        <ButtonGroup.Button variant="collapsed" buttonType="text" size="xl">
          Button
        </ButtonGroup.Button>
        <ButtonGroup.Button variant="collapsed" buttonType="text" size="xl">
          Button
        </ButtonGroup.Button>
        <ButtonGroup.Button
          variant="collapsed"
          disabled
          buttonType="text"
          size="xl">
          Button
        </ButtonGroup.Button>
      </ButtonGroup.Wrapper>
    )
  }
}

export const CollapsedButtonGroupWithIconButton: Story = {
  name: "Collapsed Button Group With Icon Button",
  args: {
    spacing: "collapse"
  },
  render: (args) => {
    return (
      <ButtonGroup.Wrapper {...args}>
        <ButtonGroup.Button variant="collapsed" buttonType="icon" size="xl">
          <Icon3DFilled height={20} width={20} />
        </ButtonGroup.Button>
        <ButtonGroup.Button variant="collapsed" buttonType="icon" size="xl">
          <Icon3DFilled height={20} width={20} />
        </ButtonGroup.Button>
        <ButtonGroup.Button
          variant="collapsed"
          disabled
          buttonType="icon"
          size="xl">
          <Icon3DFilled height={20} width={20} />
        </ButtonGroup.Button>
      </ButtonGroup.Wrapper>
    )
  }
}
