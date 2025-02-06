import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";

import { cn } from "@/lib/utils";
import { ReactFigma } from "@/app/polipo-react";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ReactFigma layout="progress">
    {{
      ":host": (
        <ProgressPrimitive.Root
          ref={ref}
          className={cn("touch-none select-none", className)}
          {...props}
        />
      ),
      Indicator: (
        <ProgressPrimitive.Indicator
          style={{ right: `${100 - (value ?? 0)}%` }}
        />
      ),
    }}
  </ReactFigma>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
