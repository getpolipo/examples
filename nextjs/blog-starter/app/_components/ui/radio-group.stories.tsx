import type { Meta } from "@storybook/react";
import { fn } from "@storybook/test";

import { RadioGroup, RadioGroupItem } from "./radio-group";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof RadioGroup>;

export default meta;

export const Primary = () => (
  <RadioGroup>
    <RadioGroupItem value="a" />
    <RadioGroupItem value="b" />
  </RadioGroup>
);
