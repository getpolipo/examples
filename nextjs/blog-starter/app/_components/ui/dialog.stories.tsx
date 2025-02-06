import { Meta } from "@storybook/react";
import { Button } from "./button";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";

const meta = {
  title: "Example/Dialog",
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Dialog>;

export default meta;

export const Primary = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button>Edit Profile</Button>
    </DialogTrigger>
    <DialogContent>
      <div>Dialog example</div>
    </DialogContent>
  </Dialog>
);
