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

  // @ts-ignore missing types
  '[class*="secondary"]': {
    properties: {
      Variant: `Secondary`,
    },
  },

  // @ts-ignore missing types
  '[class*="destructive"]': {
    properties: {
      Variant: `Destructive`,
    },
  },

  // @ts-ignore missing types
  '[class*="link"]': {
    properties: {
      Variant: `Link`,
    },
  },
});
