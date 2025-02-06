import type { Meta } from "@storybook/react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/app/_components/ui/hover-card";
import { Button } from "@/app/_components/ui/button";
import { CalendarDays } from "lucide-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/HoverCard",
  component: HoverCard,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HoverCard>;

export default meta;

export const Primary = () => (
  <HoverCard>
    <HoverCardTrigger>
      <Button variant="link">@nextjs</Button>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="flex justify-between space-x-4">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@nextjs</h4>
          <p className="text-sm">
            The React Framework – created and maintained by @vercel.
          </p>
          <div className="flex items-center pt-2">
            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
            <span className="text-xs text-muted-foreground">
              Joined December 2021
            </span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
);
