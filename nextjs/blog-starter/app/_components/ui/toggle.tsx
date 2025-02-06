import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";

import { cn } from "@/lib/utils";
import { ReactFigma } from "@/app/polipo-react";

export const toggleItemStyle =
  "disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>
>(({ className, ...props }, ref) => (
  <ReactFigma layout="toggleGroupItem">
    {{
      ":host": (
        <TogglePrimitive.Root
          ref={ref}
          className={cn(toggleItemStyle, className)}
          {...props}
        />
      ),
    }}
  </ReactFigma>
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
