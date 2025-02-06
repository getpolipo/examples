import { defineFigmaLayout } from "polipo/layout";

export const toggleGroup = defineFigmaLayout({
  path: `Components/ToggleGroup/Root`,
});

export const toggleGroupItem = defineFigmaLayout({
  path: `Components/ToggleGroup/Item`,
  properties: {
    State: `Resting`,
  },
  "[data-state='on']": {
    properties: {
      State: `Selected`,
    },
  },
  "[disabled]": {
    properties: {
      State: `Disabled`,
    },
  },
});
