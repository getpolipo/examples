import { Toast, ToastAction } from "@/app/_components/ui/toast";
import { Toaster } from "@/app/_components/ui/toaster";
import { Button } from "@/app/_components/ui/button";
import { useToast } from "@/app/hooks/use-toast";
import type { Meta } from "@storybook/react";
import { fn } from "@storybook/test";

// import { Textarea } from "./textarea";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Toast>;

export default meta;

export const Primary = () => {
  const { toast } = useToast();

  return (
    <>
      <Toaster />
      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up ",
            description: "Friday, February 10, 2023 at 5:57 PM",
            action: (
              <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            ),
            duration: 100000,
          });
        }}
      >
        Add to calendar
      </Button>
    </>
  );
};
