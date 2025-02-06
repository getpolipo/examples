import { defineFigmaLayout } from "polipo/layout";

export const commandLayout = defineFigmaLayout({
  path: "Components/Command/Root",
  wFill: true,
});

export const commandInput = defineFigmaLayout({
  path: "Components/Command/Input",
  wFill: true,
});

export const commandGroup = defineFigmaLayout({
  path: "Components/Command/Group",
  wFill: true,
});

export const commandList = defineFigmaLayout({
  path: "Components/Command/List",
  wFill: true,
});

export const commandSeparator = defineFigmaLayout({
  path: "Components/Command/Separator",
  wFill: true,
});

export const commandItem = defineFigmaLayout({
  path: "Components/Command/Item",
  wFill: true,
  // @ts-ignore missing types
  "[data-selected=true]": {
    properties: {
      State: "Selected",
    },
  },
  // @ts-ignore missing types
  "[data-disabled=true]": {
    properties: {
      State: "Disabled",
    },
  },
});

export const commandShortcut = defineFigmaLayout({
  path: "Components/Command/Shortcut",
});

export const commandEmpty = defineFigmaLayout({
  path: "Components/Command/Empty",
  wFill: true,
});

export const commandHeading = defineFigmaLayout({
  path: "Components/Command/Heading",
  wFill: true,
});
