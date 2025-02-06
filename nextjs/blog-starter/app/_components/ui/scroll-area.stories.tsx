import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { ScrollArea } from "./scroll-area";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/ScrollArea",
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn(), type: "always", scrollHideDelay: 1e9 },
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <div style={{ whiteSpace: "pre" }}>
          {Array.from({ length: 10 })
            .map(() => `Lorem ipsum`)
            .join(" ")}
        </div>
        {Array.from({ length: 50 }).map((_, i, a) => (
          <div>{`v1.2.0-beta.${a.length - i}`}</div>
        ))}
      </>
    ),
  },
};
