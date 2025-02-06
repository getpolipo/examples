import { Sheet, SheetContent, SheetTrigger } from "@/app/_components/ui/sheet";
import { Meta } from "@storybook/react";
import { Button } from "./button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/shadcn/sheet";

const meta = {
  title: "Example/Sheet",
  component: Sheet,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Sheet>;

export default meta;

export const Primary = () => (
  <Sheet>
    <SheetTrigger>
      <Button>Show sheet</Button>
    </SheetTrigger>
    <SheetContent>
      <div>
        <h1>Edit profile</h1>
        <p>Make changes to your profile here. Click save when you're done.</p>
      </div>
      <div>Sheet example</div>
    </SheetContent>
  </Sheet>
);
