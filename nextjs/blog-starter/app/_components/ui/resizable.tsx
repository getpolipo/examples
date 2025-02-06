"use client";

import * as ResizablePrimitive from "react-resizable-panels";

import { cn } from "@/lib/utils";
import { ReactFigma } from "@/app/polipo-react";

const ResizablePanelGroup = ({
  className,
  // children,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) => (
  <ResizablePrimitive.PanelGroup
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
);

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle = ({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle>) => (
  <ReactFigma layout="resizableHandleLayout">
    {{
      ":host": (
        <ResizablePrimitive.PanelResizeHandle
          className={cn(
            "relative data-[panel-group-direction=vertical]:w-auto data-[panel-group-direction=horizontal]:h-auto",
            className
          )}
          {...props}
        />
      ),
      HandleIndicator: <div className="z-10" />,
    }}
  </ReactFigma>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
