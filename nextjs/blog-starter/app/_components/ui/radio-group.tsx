import { ReactFigma } from "@/app/polipo-react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as React from "react";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>((props, ref) => {
  return (
    <ReactFigma layout="radioGroup">
      {{
        ":host": <RadioGroupPrimitive.Root ref={ref} {...props} />,
      }}
    </ReactFigma>
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>((props, ref) => {
  return (
    <ReactFigma layout="radioGroupItem">
      {{
        ":host": <RadioGroupPrimitive.Item ref={ref} {...props} />,
        Indicator: <RadioGroupPrimitive.Indicator />,
      }}
    </ReactFigma>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
