import { useToast } from "@/app/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/app/_components/ui/toast";
import { ReactFigma } from "@/app/polipo-react";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <ReactFigma layout="toast">
            {{
              ":host": <Toast key={id} {...props} />,
              Title: title ? <ToastTitle>{title}</ToastTitle> : null,
              Description: description ? (
                <ToastDescription>{description}</ToastDescription>
              ) : null,
              Action: action,
              Close: <ToastClose />,
            }}
          </ReactFigma>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
