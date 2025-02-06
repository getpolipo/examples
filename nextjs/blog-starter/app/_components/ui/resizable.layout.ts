import { defineFigmaLayout } from "polipo/layout";

export const resizableHandleLayout = defineFigmaLayout({
  path: `Components/Resizable/Handle`,
  properties: {
    Direction: "Horizontal",
  },
  // @ts-ignore missing types
  '[data-panel-group-direction="vertical"]': {
    properties: {
      Direction: "Vertical",
    },
  },
});
