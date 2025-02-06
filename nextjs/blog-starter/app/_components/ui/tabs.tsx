import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";
import { ReactFigma } from "@/app/polipo-react";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <ReactFigma layout="tabsList">
    {{
      ":host": (
        <TabsPrimitive.List ref={ref} className={cn(className)} {...props} />
      ),
    }}
  </ReactFigma>
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <ReactFigma layout="tabsTrigger">
    {{
      ":host": (
        <TabsPrimitive.Trigger ref={ref} className={cn(className)} {...props} />
      ),
      Text: <>{children}</>,
    }}
  </ReactFigma>
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <ReactFigma layout="tabsContent">
    {{
      ":host": (
        <TabsPrimitive.Content ref={ref} className={cn(className)} {...props} />
      ),
      Children: <>{children}</>,
    }}
  </ReactFigma>
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
