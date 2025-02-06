import { defineFigmaLayout } from "polipo/layout";

export const selectTrigger = defineFigmaLayout({
  path: `Components/Select/Trigger`,
});

export const selectContent = defineFigmaLayout({
  path: `Components/Select/Content`,
});

export const selectGroup = defineFigmaLayout({
  path: `Components/Select/Group`,
  wFill: true,
});

export const selectLabel = defineFigmaLayout({
  path: `Components/Select/Label`,
  wFill: true,
});

export const selectItem = defineFigmaLayout({
  path: `Components/Select/Item`,
  wFill: true,
  ":focus": {
    properties: {
      State: `Hover`,
    },
  },
});

export const selectSeparator = defineFigmaLayout({
  path: `Components/Select/Separator`,
  wFill: true,
});
