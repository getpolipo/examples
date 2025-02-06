import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ReactFigma } from "@/app/polipo-react";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ ...props }, ref) => (
  <ReactFigma layout="accordionItem">
    {{
      ":host": <AccordionPrimitive.Item ref={ref} {...props} />,
    }}
  </ReactFigma>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ children, ...props }, ref) => (
  <ReactFigma layout="accordionTrigger">
    {{
      ":host": <AccordionPrimitive.Header className="flex" />,
      Trigger: (
        <AccordionPrimitive.Trigger
          ref={ref}
          className="[&[data-state=open]_.Icon]:rotate-180"
          {...props}
        />
      ),
      Icon: <div className="Icon transition-transform duration-200" />,
      Children: <>{children}</>,
    }}
  </ReactFigma>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ children, ...props }, ref) => (
  <ReactFigma layout="accordionContent">
    {{
      ":host": (
        <AccordionPrimitive.Content
          ref={ref}
          className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
          {...props}
        />
      ),
      Children: <>{children}</>,
    }}
  </ReactFigma>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
