import layoutConfig from "@/app/polipo";
import { createReactFigma, createReactFigmaDev } from "polipo/react";
import polipoData from "@/app/polipo.json";

export const { ReactFigma, ReactFigmaProvider } =
  process.env.NODE_ENV === "development"
    ? createReactFigmaDev({
        root: layoutConfig,
      })
    : createReactFigma({
        data: polipoData,
      });
