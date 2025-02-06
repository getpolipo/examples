import { cn } from "@/lib/utils";
import { ReactFigma } from "@/app/polipo-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import React from "react";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogTitle = DialogPrimitive.Title;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <DialogPortal>
    <ReactFigma layout="dialogContent">
      {{
        ":host": <div className="fixed inset-0 z-50" />,
        Overlay: <DialogPrimitive.Overlay ref={ref} />,
        Content: (
          <DialogPrimitive.Content ref={ref} className={className} {...props} />
        ),
      }}
    </ReactFigma>
  </DialogPortal>
));

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogPortal,
  DialogTrigger,
  DialogTitle,
};
