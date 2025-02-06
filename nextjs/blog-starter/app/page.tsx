"use client";

import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { Primary as ComboboxStory } from "@/app/_components/ui/combobox.stories";
import { Primary as CommandStory } from "@/app/_components/ui/command.stories";
import { Primary as PopoverStory } from "@/app/_components/ui/popover.stories";
import { Primary as DialogStory } from "@/app/_components/ui/dialog.stories";
import { Primary as Resizable } from "@/app/_components/ui/resizable.stories";

const componentsToRender = [
  {
    name: "Combobox",
    Component: ComboboxStory,
  },
  {
    name: "Command",
    Component: CommandStory,
  },
  {
    name: "Popover",
    Component: PopoverStory,
  },
  {
    name: "Dialog",
    Component: DialogStory,
  },
  {
    name: "Resizable",
    Component: Resizable,
  },
];

export default function Home() {
  return (
    <div className="p-4">
      <div className="flex flex-col items-center">
        <Link href={`/blog`}>
          <Button variant="secondary">Blog Example</Button>
        </Link>
        <h1 className="mt-4 text-2xl font-bold">Components</h1>
      </div>
      <div className="flex flex-wrap gap-6 mt-6 justify-center">
        {componentsToRender.map((comp, index) => (
          <div
            key={index}
            className="flex flex-col w-full border p-4 rounded shadow max-w-[500px]"
          >
            <h2 className="mb-4 text-xl font-medium">{comp.name}</h2>
            <comp.Component />
          </div>
        ))}
      </div>
    </div>
  );
}
