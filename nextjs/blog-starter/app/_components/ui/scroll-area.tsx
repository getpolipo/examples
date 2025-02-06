import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import * as React from "react";

import { ReactFigma } from "@/app/polipo-react";

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ children, ...props }, ref) => (
  <ReactFigma layout="scrollArea">
    {{
      ":host": <ScrollAreaPrimitive.Root ref={ref} {...props} />,
      Viewport: (
        <ScrollAreaPrimitive.Viewport>{children}</ScrollAreaPrimitive.Viewport>
      ),
      VerticalScrollbar: (
        <ScrollAreaPrimitive.ScrollAreaScrollbar orientation="vertical" />
      ),
      VerticalScrollbarThumb: <ScrollAreaPrimitive.Thumb />,
      HorizontalScrollbar: (
        <ScrollAreaPrimitive.ScrollAreaScrollbar orientation="horizontal" />
      ),
      HorizontalScrollbarThumb: <ScrollAreaPrimitive.Thumb />,
      Corner: <ScrollAreaPrimitive.Corner />,
    }}
  </ReactFigma>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

export { ScrollArea };
