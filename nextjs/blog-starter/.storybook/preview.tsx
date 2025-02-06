import type { Decorator, Preview } from "@storybook/react";
import React from "react";
import "../app/globals.css";
import { ReactFigmaProvider } from "../app/polipo-react";

export const decorators: Decorator[] = [
  (Story) => (
    <ReactFigmaProvider>
      <Story />
    </ReactFigmaProvider>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
