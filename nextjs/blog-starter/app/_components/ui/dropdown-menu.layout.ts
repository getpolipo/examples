import { defineFigmaLayout } from "polipo/layout";

export const dropdownMenuSubTrigger = defineFigmaLayout({
  path: "Components/DropdownMenu/SubTrigger",
  wFill: true,
  ":focus": {
    properties: { State: "Focused" },
  },
  // @ts-ignore missing types
  "[data-disabled=true]": {
    properties: { State: "Disabled" },
  },
  // ":focus": {
  //   properties: {
  //     State: "Focused",
  //   },
  // },
});

export const dropdownMenuItem = defineFigmaLayout({
  path: "Components/DropdownMenu/MenuItem",
  wFill: true,
  ":focus": {
    properties: { State: "Focused" },
  },
  // @ts-ignore missing types
  "[data-disabled]": {
    properties: { State: "Disabled" },
  },
});

export const dropdownMenuShortcut = defineFigmaLayout({
  path: "Components/DropdownMenu/Shortcut",
});

export const dropdownMenuSubContent = defineFigmaLayout({
  path: "Components/DropdownMenu/SubContent",
  wFill: true,
});

export const dropdownMenuContent = defineFigmaLayout({
  path: "Components/DropdownMenu/Content",
  wFill: true,
});

export const dropdownMenuGroup = defineFigmaLayout({
  path: "Components/DropdownMenu/Group",
  wFill: true,
});

export const dropdownMenuLabel = defineFigmaLayout({
  path: "Components/DropdownMenu/MenuLabel",
  wFill: true,
});

export const dropdownMenuSeparator = defineFigmaLayout({
  path: "Components/DropdownMenu/Separator",
  wFill: true,
});
