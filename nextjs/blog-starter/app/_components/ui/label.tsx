import { ReactFigma } from "@/app/polipo-react";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as React from "react";

const Label = React.forwardRef<HTMLLabelElement, React.ComponentProps<"label">>(
  ({ ...props }, ref) => (
    <ReactFigma layout="label">
      {{
        ":host": <LabelPrimitive.Root ref={ref} {...props} />,
      }}
    </ReactFigma>
  )
);

Label.displayName = "Label";

export { Label };
