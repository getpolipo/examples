import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import * as React from "react";

import { Dialog, DialogContent } from "@/app/_components/ui/dialog";
import { cn } from "@/lib/utils";
import { ReactFigma } from "@/app/polipo-react";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <ReactFigma layout="commandLayout">
    {{
      ":host": (
        <CommandPrimitive ref={ref} className={cn(className)} {...props} />
      ),
    }}
  </ReactFigma>
));

Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent>
        <Command>{children}</Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <ReactFigma layout="commandInput">
    {{
      Input: (
        <CommandPrimitive.Input
          ref={ref}
          className={cn(className)}
          {...props}
          children={null}
        />
      ),
    }}
  </ReactFigma>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <ReactFigma layout="commandList">
    {{
      ":host": (
        <CommandPrimitive.List
          ref={ref}
          className={cn(
            className,
            "overflow-y-auto [&>[cmdk-list-sizer]]:contents"
          )}
          {...props}
        />
      ),
    }}
  </ReactFigma>
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>(({ children, ...props }, ref) => (
  <ReactFigma layout="commandEmpty">
    {{
      ":host": <CommandPrimitive.Empty ref={ref} {...props} />,
      Children: <span>{children}</span>,
    }}
  </ReactFigma>
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, heading, children, ...props }, ref) => (
  <ReactFigma layout="commandGroup">
    {{
      ":host": (
        <CommandPrimitive.Group
          ref={ref}
          className={cn(
            className,
            "[&>[cmdk-group-items]]:contents [&>[cmdk-group-heading]]:contents"
          )}
          heading={
            !heading ? undefined : (
              <ReactFigma layout="commandHeading">
                {{
                  HeadingText: <>{heading}</>,
                }}
              </ReactFigma>
            )
          }
          {...props}
        />
      ),
      Children: <>{children}</>,
    }}
  </ReactFigma>
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <ReactFigma layout="commandSeparator">
    {{
      ":host": (
        <CommandPrimitive.Separator
          ref={ref}
          className={cn(className)}
          {...props}
        />
      ),
    }}
  </ReactFigma>
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <ReactFigma layout="commandItem">
    {{
      ":host": (
        <CommandPrimitive.Item ref={ref} className={cn(className)} {...props} />
      ),
      Children: <>{children}</>,
    }}
  </ReactFigma>
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <ReactFigma layout="commandShortcut">
      {{
        ":host": <span className={cn(className, "ml-auto")} {...props} />,
      }}
    </ReactFigma>
  );
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
};
