import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: `Button`,
  },
};

export const Secondary = () => {
  return <Button variant="secondary">Button</Button>;
};

export const Destructive = () => {
  return <Button variant="destructive">Button</Button>;
};

export const Link = () => {
  return <Button variant="link">Button</Button>;
};
