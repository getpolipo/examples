"use client";

import { defineFigmaLayout, defineFigmaRoot } from "polipo/layout";

export default defineFigmaRoot({
  layouts: {
    home: defineFigmaLayout({
      path: `Example1/Desktop`,
      wFill: true,
    }),
    postCard: defineFigmaLayout({
      path: `Example1/PostCard`,
      wFill: true,
    }),
    post: defineFigmaLayout({
      path: `Example1/DesktopPost`,
      wFill: true,
    }),
  },
});
