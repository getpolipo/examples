import { defineFigmaLayout } from "polipo/layout";

export const contextMenuContent = defineFigmaLayout({
  path: `Components/ContextMenu/Content`,
});

export const contextMenuItem = defineFigmaLayout({
  path: `Components/ContextMenu/MenuItem`,
  properties: {
    State: "Resting",
  },
  ":focus": {
    properties: {
      State: "Hover",
    },
  },
  // @ts-ignore missing types
  "[data-disabled]": {
    properties: {
      State: "Disabled",
    },
  },
  wFill: true,
});

export const contextMenuCheckboxItem = defineFigmaLayout({
  path: `Components/ContextMenu/CheckboxItem`,
  properties: {
    State: "Resting",
  },
  ":focus": {
    properties: {
      State: "Hover",
    },
  },
  // @ts-ignore missing types
  "[data-disabled]": {
    properties: {
      State: "Disabled",
    },
  },
  wFill: true,
});

export const contextMenuSubTrigger = defineFigmaLayout({
  path: `Components/ContextMenu/SubTrigger`,
  properties: {
    State: "Resting",
  },
  ":focus": {
    properties: {
      State: "Hover",
    },
  },
  // @ts-ignore missing types
  "[data-disabled]": {
    properties: {
      State: "Disabled",
    },
  },
  wFill: true,
});

export const contextMenuRadioItem = defineFigmaLayout({
  path: `Components/ContextMenu/RadioItem`,
  properties: {
    State: "Resting",
  },
  ":focus": {
    properties: {
      State: "Hover",
    },
  },
  // @ts-ignore missing types
  "[data-disabled]": {
    properties: {
      State: "Disabled",
    },
  },
  wFill: true,
});

export const contextMenuLabel = defineFigmaLayout({
  path: `Components/ContextMenu/MenuLabel`,
});

export const contextMenuSeparator = defineFigmaLayout({
  path: `Components/ContextMenu/Separator`,
  wFill: true,
});

export const contextMenuSubContent = defineFigmaLayout({
  path: `Components/ContextMenu/SubContent`,
});
