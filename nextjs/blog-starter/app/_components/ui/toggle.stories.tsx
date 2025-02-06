import { Toggle } from "@/app/_components/ui/toggle";
import type { Meta } from "@storybook/react";
import { Bold } from "lucide-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>;

export default meta;

export const Primary = () => (
  <Toggle aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </Toggle>
);
