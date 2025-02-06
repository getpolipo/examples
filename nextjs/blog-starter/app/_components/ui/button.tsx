import { cn } from "@/lib/utils";
import { ReactFigma } from "@/app/polipo-react";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "destructive" | "link";

const Button = forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }
>(({ children, variant, className, ...props }, ref) => {
  return (
    <ReactFigma layout="button">
      {{
        ":host": (
          <button ref={ref} className={cn(className, variant)} {...props} />
        ),
        Label: <>{children}</>,
      }}
    </ReactFigma>
  );
});
Button.displayName = "Button";

export { Button };
