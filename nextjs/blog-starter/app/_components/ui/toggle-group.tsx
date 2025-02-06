import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";
import { cn } from "@/lib/utils";
import { ReactFigma } from "@/app/polipo-react";
import { toggleItemStyle } from "@/app/_components/ui/toggle";

const ToggleGroup = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>
>(({ className, ...props }, ref) => (
  <ReactFigma layout="toggleGroup">
    {{
      ":host": (
        <ToggleGroupPrimitive.Root ref={ref} className={className} {...props} />
      ),
    }}
  </ReactFigma>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef<
  React.ElementRef<typeof ToggleGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <ReactFigma layout="toggleGroupItem">
      {{
        ":host": (
          <ToggleGroupPrimitive.Item
            ref={ref}
            className={cn(toggleItemStyle, className)}
            {...props}
          />
        ),
      }}
    </ReactFigma>
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
