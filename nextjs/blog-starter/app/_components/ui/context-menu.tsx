import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { cn } from "@/lib/utils";
import { ReactFigma } from "@/app/polipo-react";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ReactFigma layout="contextMenuSubTrigger">
    {{
      ":host": (
        <ContextMenuPrimitive.SubTrigger
          ref={ref}
          className={cn(
            "cursor-default select-none",
            inset && "pl-8",
            className
          )}
          {...props}
        />
      ),
      Children: <>{children}</>,
    }}
  </ReactFigma>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <ReactFigma layout="contextMenuSubContent">
    {{
      ":host": (
        <ContextMenuPrimitive.SubContent
          ref={ref}
          className={cn(
            "z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            className
          )}
          {...props}
        />
      ),
    }}
  </ReactFigma>
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ReactFigma layout="contextMenuContent">
      {{
        ":host": (
          <ContextMenuPrimitive.Content
            ref={ref}
            className={cn(
              "z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
              className
            )}
            {...props}
          />
        ),
      }}
    </ReactFigma>
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ReactFigma layout="contextMenuItem">
    {{
      ":host": (
        <ContextMenuPrimitive.Item
          ref={ref}
          className={cn(
            "cursor-default select-none",
            inset && "pl-8",
            className
          )}
          {...props}
        />
      ),
      Children: <>{children}</>,
    }}
  </ReactFigma>
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <ReactFigma layout="contextMenuCheckboxItem">
    {{
      ":host": (
        <ContextMenuPrimitive.CheckboxItem
          ref={ref}
          className={cn(
            "cursor-default select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className
          )}
          checked={checked}
          {...props}
        />
      ),
      Children: <>{children}</>,
      CheckboxIcon: <ContextMenuPrimitive.ItemIndicator />,
    }}
  </ReactFigma>
));
ContextMenuCheckboxItem.displayName =
  ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <ReactFigma layout="contextMenuRadioItem">
    {{
      ":host": (
        <ContextMenuPrimitive.RadioItem
          ref={ref}
          className={cn(
            "cursor-default select-none items-center data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className
          )}
          {...props}
        />
      ),
      Children: <>{children}</>,
      RadioIcon: <ContextMenuPrimitive.ItemIndicator />,
    }}
  </ReactFigma>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <ReactFigma layout="contextMenuLabel">
    {{
      ":host": (
        <ContextMenuPrimitive.Label
          ref={ref}
          className={cn(inset && "pl-8", className)}
          {...props}
        />
      ),
      Label: <>{children}</>,
    }}
  </ReactFigma>
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ReactFigma layout="contextMenuSeparator">
    {{
      ":host": (
        <ContextMenuPrimitive.Separator
          ref={ref}
          className={cn(className)}
          {...props}
        />
      ),
    }}
  </ReactFigma>
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
};
