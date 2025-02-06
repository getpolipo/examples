"use client";

import {
  accordionTrigger,
  accordionContent,
  accordionItem,
} from "@/app/_components/ui/accordion.layout";
import { button } from "@/app/_components/ui/button.layout";
import {
  card,
  cardHeader,
  cardDescription,
  cardContent,
  cardFooter,
  cardTitle,
} from "@/app/_components/ui/card.layout";
import { checkbox } from "@/app/_components/ui/checkbox.layout";
import {
  commandLayout,
  commandInput,
  commandGroup,
  commandList,
  commandSeparator,
  commandItem,
  commandShortcut,
  commandEmpty,
  commandHeading,
} from "@/app/_components/ui/command.layout";
import {
  contextMenuContent,
  contextMenuItem,
  contextMenuCheckboxItem,
  contextMenuSubTrigger,
  contextMenuRadioItem,
  contextMenuLabel,
  contextMenuSeparator,
  contextMenuSubContent,
} from "@/app/_components/ui/context-menu.layout";
import { dialogContent } from "@/app/_components/ui/dialog.layout";
import {
  dropdownMenuSubTrigger,
  dropdownMenuItem,
  dropdownMenuShortcut,
  dropdownMenuSubContent,
  dropdownMenuContent,
  dropdownMenuGroup,
  dropdownMenuLabel,
  dropdownMenuSeparator,
} from "@/app/_components/ui/dropdown-menu.layout";
import { hoverCardContent } from "@/app/_components/ui/hover-card.layout";
import { input } from "@/app/_components/ui/input.layout";
import { label } from "@/app/_components/ui/label.layout";
import {
  paginationContent,
  paginationRoot,
} from "@/app/_components/ui/pagination.layout";
import { popoverContent } from "@/app/_components/ui/popover.layout";
import { progress } from "@/app/_components/ui/progress.layout";
import {
  radioGroup,
  radioGroupItem,
} from "@/app/_components/ui/radio-group.layout";
import { resizableHandleLayout } from "@/app/_components/ui/resizable.layout";
import { scrollArea } from "@/app/_components/ui/scroll-area.layout";
import {
  selectTrigger,
  selectContent,
  selectGroup,
  selectLabel,
  selectItem,
  selectSeparator,
} from "@/app/_components/ui/select.layout";
import { sheetRoot } from "@/app/_components/ui/sheet.layout";
import { slider } from "@/app/_components/ui/slider.layout";
import {
  tabsList,
  tabsTrigger,
  tabsContent,
} from "@/app/_components/ui/tabs.layout";
import { textarea } from "@/app/_components/ui/textarea.layout";
import {
  toast,
  toastTitle,
  toastDescription,
  toastAction,
  toastClose,
} from "@/app/_components/ui/toast.layout";
import {
  toggleGroup,
  toggleGroupItem,
} from "@/app/_components/ui/toggle-group.layout";
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

    // design system
    button,
    checkbox,
    radioGroup,
    radioGroupItem,
    selectTrigger,
    selectContent,
    selectGroup,
    selectLabel,
    selectItem,
    selectSeparator,
    input,
    textarea,
    accordionTrigger,
    accordionContent,
    accordionItem,
    slider,
    progress,
    dialogContent,
    scrollArea,
    label,
    popoverContent,
    commandLayout,
    commandInput,
    commandGroup,
    commandList,
    commandSeparator,
    commandItem,
    commandShortcut,
    commandEmpty,
    commandHeading,
    sheetRoot,
    dropdownMenuSubTrigger,
    dropdownMenuItem,
    dropdownMenuShortcut,
    dropdownMenuSubContent,
    dropdownMenuContent,
    dropdownMenuGroup,
    dropdownMenuLabel,
    dropdownMenuSeparator,
    toast,
    toastTitle,
    toastDescription,
    toastAction,
    toastClose,
    hoverCardContent,
    contextMenuContent,
    contextMenuItem,
    contextMenuCheckboxItem,
    contextMenuSubTrigger,
    contextMenuRadioItem,
    contextMenuLabel,
    contextMenuSeparator,
    contextMenuSubContent,

    card,
    cardHeader,
    cardDescription,
    cardContent,
    cardFooter,
    cardTitle,

    toggleGroup,
    toggleGroupItem,

    tabsList,
    tabsTrigger,
    tabsContent,

    resizableHandleLayout,

    paginationContent,
    paginationRoot,
  },
  getFont: ({ family }) => {
    const fontFamily = {
      Inter: `var(--font-inter)`,
      "Source Code Pro": `var(--font-source-code-pro)`,
    }[family];

    if (!fontFamily) console.warn(`unknown font family: ${family}`);

    return {
      family: fontFamily ?? `sans-serif`,
    };
  },
});
