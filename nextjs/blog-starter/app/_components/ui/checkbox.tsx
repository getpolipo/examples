import { ReactFigma } from "@/app/polipo-react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as React from "react";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>((props, ref) => (
  <ReactFigma layout="checkbox">
    {{
      ":host": <CheckboxPrimitive.Root ref={ref} {...props} />,
      Indicator: <CheckboxPrimitive.Indicator />,
    }}
  </ReactFigma>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
