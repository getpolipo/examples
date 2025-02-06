import { defineFigmaLayout } from "polipo/layout";

export const button = defineFigmaLayout({
  path: `Components/Button/Root`,
  ":hover": {
    properties: {
      State: `Hover`,
    },
  },
  properties: {
    Variant: `Primary`,
  },

  '[class*="secondary"]': {
    properties: {
      Variant: `Secondary`,
    },
  },

  '[class*="destructive"]': {
    properties: {
      Variant: `Destructive`,
    },
  },

  '[class*="link"]': {
    properties: {
      Variant: `Link`,
    },
  },
});
