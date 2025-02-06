import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "@/lib/utils";
import { ReactFigma } from "@/app/polipo-react";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <ReactFigma layout="slider">
    {{
      ":host": (
        <SliderPrimitive.Root
          ref={ref}
          className={cn("touch-none select-none", className)}
          {...props}
        />
      ),
      Track: <SliderPrimitive.Track />,
      Range: <SliderPrimitive.Range />,
      Thumb: <SliderPrimitive.Thumb />,
    }}
  </ReactFigma>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
