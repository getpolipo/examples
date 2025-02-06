import { Button } from "@/app/_components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/_components/ui/popover";
import { Meta } from "@storybook/react";

const meta = {
  title: "Example/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Popover>;

export default meta;

export const Primary = () => {
  return (
    <Popover>
      {/* TODO asChild */}
      <PopoverTrigger asChild>
        <Button>Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div>Popover example</div>
      </PopoverContent>
    </Popover>
  );
};
