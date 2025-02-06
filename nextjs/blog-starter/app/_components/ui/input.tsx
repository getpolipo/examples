import { ReactFigma } from "@/app/polipo-react";
import * as React from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  (props, ref) => (
    <ReactFigma layout="input">
      {{
        ":host": <input ref={ref} {...props} children={null} />,
      }}
    </ReactFigma>
  )
);

Input.displayName = "Input";

export { Input };
