"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import * as React from "react";

import { ReactFigma } from "@/app/polipo-react";

const Select = SelectPrimitive.Root;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ children, ...props }, ref) => (
  <ReactFigma layout="selectTrigger">
    {{
      ":host": <SelectPrimitive.Trigger ref={ref} {...props} />,
      Children: <>{children}</>,
      Icon: <SelectPrimitive.Icon />,
    }}
  </ReactFigma>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ children, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <ReactFigma layout="selectContent">
      {{
        ":host": <SelectPrimitive.Content ref={ref} {...props} />,
        Viewport: <SelectPrimitive.Viewport />,
        Children: <>{children}</>,
        ScrollUpButton: <SelectPrimitive.ScrollUpButton />,
        ScrollDownButton: <SelectPrimitive.ScrollDownButton />,
      }}
    </ReactFigma>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectGroup = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group>
>(({ ...props }, ref) => (
  <ReactFigma layout="selectGroup">
    {{
      ":host": <SelectPrimitive.Group ref={ref} {...props} />,
    }}
  </ReactFigma>
));
SelectGroup.displayName = SelectPrimitive.Group.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ children, ...props }, ref) => (
  <ReactFigma layout="selectLabel">
    {{
      ":host": <SelectPrimitive.Label ref={ref} {...props} />,
      Text: <>{children}</>,
    }}
  </ReactFigma>
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ children, ...props }, ref) => (
  <ReactFigma layout="selectItem">
    {{
      ":host": <SelectPrimitive.Item ref={ref} {...props} />,
      Indicator: <SelectPrimitive.ItemIndicator />,
      Text: <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>,
    }}
  </ReactFigma>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>((props, ref) => (
  <ReactFigma layout="selectSeparator">
    {{
      ":host": <SelectPrimitive.Separator ref={ref} {...props} />,
    }}
  </ReactFigma>
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
