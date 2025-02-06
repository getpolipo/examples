import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import * as React from "react";

import { cn } from "@/lib/utils";
import { ReactFigma } from "@/app/polipo-react";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ReactFigma layout="dropdownMenuSubTrigger">
    {{
      ":host": <DropdownMenuPrimitive.SubTrigger ref={ref} {...props} />,
      Children: <>{children}</>,
    }}
  </ReactFigma>
));

DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ReactFigma layout="dropdownMenuSubContent">
    {{
      ":host": <DropdownMenuPrimitive.SubContent ref={ref} {...props} />,
    }}
  </ReactFigma>
));

DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <ReactFigma layout="dropdownMenuContent">
      {{
        ":host": (
          <DropdownMenuPrimitive.Content
            ref={ref}
            sideOffset={sideOffset}
            className={cn(className, "fixed")}
            {...props}
          />
        ),
      }}
    </ReactFigma>
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuGroup = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Group>
>((props, ref) => (
  <ReactFigma layout="dropdownMenuGroup">
    {{
      ":host": <DropdownMenuPrimitive.Group ref={ref} {...props} />,
    }}
  </ReactFigma>
));
DropdownMenuGroup.displayName = DropdownMenuPrimitive.Group.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean; // TODO
  }
>(({ className, inset, ...props }, ref) => (
  <ReactFigma layout="dropdownMenuItem">
    {{
      ":host": (
        <DropdownMenuPrimitive.Item
          ref={ref}
          className={cn(className)}
          {...props}
        />
      ),
    }}
  </ReactFigma>
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, children, inset, ...props }, ref) => (
  <ReactFigma layout="dropdownMenuLabel">
    {{
      ":host": <DropdownMenuPrimitive.Label ref={ref} {...props} />,
      Text: <>{children}</>,
    }}
  </ReactFigma>
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ReactFigma layout="dropdownMenuSeparator">
    {{
      ":host": <DropdownMenuPrimitive.Separator ref={ref} {...props} />,
    }}
  </ReactFigma>
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <ReactFigma layout="dropdownMenuShortcut">
      {{
        ":host": (
          <span className={cn("ml-auto flex-shrink-0", className)} {...props} />
        ),
      }}
    </ReactFigma>
  );
};

export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  // DropdownMenuCheckboxItem,
  // DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
};
