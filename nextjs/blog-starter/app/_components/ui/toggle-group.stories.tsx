import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/app/_components/ui/toggle-group";
import type { Meta } from "@storybook/react";
import { Bold, Italic, Underline } from "lucide-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/ToggleGroup",
  component: ToggleGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ToggleGroup>;

export default meta;

export const Primary = () => (
  <ToggleGroup type="multiple">
    <ToggleGroupItem value="bold" aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Toggle underline">
      <Underline className="h-4 w-4" />
    </ToggleGroupItem>
  </ToggleGroup>
);
