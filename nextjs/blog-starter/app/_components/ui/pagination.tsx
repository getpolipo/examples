import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";
import { ReactFigma } from "@/app/polipo-react";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <ReactFigma layout="paginationRoot">
    {{
      ":host": (
        <nav
          role="navigation"
          aria-label="pagination"
          className={className}
          {...props}
        />
      ),
    }}
  </ReactFigma>
  // <nav
  //   role="navigation"
  //   aria-label="pagination"
  //   className={cn("mx-auto flex w-full justify-center", className)}
  //   {...props}
  // />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ReactFigma layout="paginationContent">
    {{
      ":host": <ul ref={ref} className={className} {...props} />,
    }}
  </ReactFigma>
  // <ul ref={ref} className={cn("flex flex-row items-center gap-1", className)} {...props} />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  children,
  ...props
}: PaginationLinkProps) => (
  <ReactFigma layout="button">
    {{
      ":host": (
        <a
          className={cn(className, isActive ? "primary" : "link")}
          {...props}
        />
      ),
      Label: <>{children}</>,
    }}
  </ReactFigma>
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn("flex flex-row", className)}
    {...props}
  >
    <span>{"< Previous"}</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn("flex flex-row", className)}
    {...props}
  >
    <span>{"Next >"}</span>
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span aria-hidden className={className} {...props}>
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
};
