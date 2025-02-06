import { defineFigmaLayout } from "polipo/layout";

export const toggleGroup = defineFigmaLayout({
  path: `Components/ToggleGroup/Root`,
});

export const toggleGroupItem = defineFigmaLayout({
  path: `Components/ToggleGroup/Item`,
  properties: {
    State: `Resting`,
  },
  // @ts-ignore missing types
  "[data-state='on']": {
    properties: {
      State: `Selected`,
    },
  },
  // @ts-ignore missing types
  "[disabled]": {
    properties: {
      State: `Disabled`,
    },
  },
});
