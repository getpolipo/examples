import * as React from "react";

import { ReactFigma } from "@/app/polipo-react";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <ReactFigma layout="card">
    {{
      ":host": <div ref={ref} className={className} {...props} />,
    }}
  </ReactFigma>
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <ReactFigma layout="cardHeader">
    {{
      ":host": <div ref={ref} className={className} {...props} />,
    }}
  </ReactFigma>
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <ReactFigma layout="cardTitle">
    {{
      ":host": <div ref={ref} className={className} {...props} />,
      Title: <>{children}</>,
    }}
  </ReactFigma>
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <ReactFigma layout="cardDescription">
    {{
      ":host": <div ref={ref} className={className} {...props} />,
      Description: <>{children}</>,
    }}
  </ReactFigma>
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <ReactFigma layout="cardContent">
    {{
      ":host": <div ref={ref} className={className} {...props} />,
    }}
  </ReactFigma>
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <ReactFigma layout="cardFooter">
    {{
      ":host": <div ref={ref} className={className} {...props} />,
    }}
  </ReactFigma>
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
