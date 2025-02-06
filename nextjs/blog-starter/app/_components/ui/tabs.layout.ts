import { defineFigmaLayout } from "polipo/layout";

export const tabsList = defineFigmaLayout({
  path: `Components/Tabs/List`,
  wFill: true,
});

export const tabsTrigger = defineFigmaLayout({
  path: `Components/Tabs/Trigger`,
  wFill: true,
  properties: {
    State: `Resting`,
  },
  // @ts-ignore missing types
  "[data-state='active']": {
    properties: {
      State: `Active`,
    },
  },
});

export const tabsContent = defineFigmaLayout({
  path: `Components/Tabs/Content`,
  wFill: true,
});
