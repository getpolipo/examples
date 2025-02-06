import { defineFigmaLayout } from "polipo/layout";

export const toast = defineFigmaLayout({
  path: `Components/Toast/Root`,
});

export const toastTitle = defineFigmaLayout({
  path: `Components/Toast/Title`,
  wFill: true,
});

export const toastDescription = defineFigmaLayout({
  path: `Components/Toast/Description`,
  wFill: true,
});

export const toastAction = defineFigmaLayout({
  path: `Components/Toast/ActionButton`,
});

export const toastClose = defineFigmaLayout({
  path: `Components/Toast/Close`,
});
