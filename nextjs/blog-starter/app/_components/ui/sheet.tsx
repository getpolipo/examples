import { cn } from "@/lib/utils";
import { ReactFigma } from "@/app/polipo-react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import React from "react";

type SheetContentProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Content
>;

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ className, children, ...props }, ref) => (
  <SheetPortal>
    {/*
        FIXME: unmounted before animations end.
        It seems that Overlay and Content have to be direct children of SheetPortal for animations to work.
      */}
    <ReactFigma layout="sheetRoot">
      {{
        ":host": <div className="fixed inset-0" />,
        Overlay: <SheetPrimitive.Overlay ref={ref} />,
        Content: (
          <SheetPrimitive.Content
            ref={ref}
            className={cn(
              "transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
              className
            )}
            {...props}
          />
        ),
        Children: <>{children}</>,
        Close: <SheetPrimitive.Close />,
      }}
    </ReactFigma>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

export { Sheet, SheetClose, SheetContent, SheetTrigger };
