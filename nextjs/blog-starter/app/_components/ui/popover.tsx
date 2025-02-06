import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { ReactFigma } from "@/app/polipo-react";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(
  (
    { className, children, align = "center", sideOffset = 4, ...props },
    ref
  ) => (
    <PopoverPrimitive.Portal>
      <ReactFigma layout="popoverContent">
        {{
          ":host": (
            <PopoverPrimitive.Content
              ref={ref}
              align={align}
              sideOffset={sideOffset}
              className={className}
              {...props}
            />
          ),
          Children: <>{children}</>,
        }}
      </ReactFigma>
    </PopoverPrimitive.Portal>
  )
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
