import { ReactFigma } from "@/app/polipo-react";
import * as React from "react";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>((props, ref) => (
  <ReactFigma layout="textarea">
    {{
      ":host": <textarea ref={ref} {...props} children={null} />,
    }}
  </ReactFigma>
));

Textarea.displayName = "Textarea";

export { Textarea };
