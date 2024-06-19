"use client";

import { convertHEXtoHSL_Updated } from "@/lib/utils";
import { Copy } from "lucide-react";
import { useState } from "react";
import { SketchPicker } from "react-color";
import { Button } from "../ui/button";

export type TStateProperties =
  | "background"
  | "foreground"
  | "card"
  | "card_foreground"
  | "popover"
  | "popover_foreground"
  | "primary"
  | "primary_foreground"
  | "secondary"
  | "secondary_foreground"
  | "muted"
  | "muted_foreground"
  | "accent"
  | "accent_foreground"
  | "destructive"
  | "destructive_foreground"
  | "border"
  | "input"
  | "ring"
  | "radius";

export type TRootProperties =
  | "--background"
  | "--foreground"
  | "--card"
  | "--card-foreground"
  | "--popover"
  | "--popover-foreground"
  | "--primary"
  | "--primary-foreground"
  | "--secondary"
  | "--secondary-foreground"
  | "--muted"
  | "--muted-foreground"
  | "--accent"
  | "--accent-foreground"
  | "--destructive"
  | "--destructive-foreground"
  | "--border"
  | "--input"
  | "--ring"
  | "--radius";

type TSwatchMap = {
  storeVariable: TStateProperties;
  colorVariable: TRootProperties;
}[];

const SwatchMap: TSwatchMap = [
  {
    storeVariable: "primary",
    colorVariable: "--primary",
  },
  {
    storeVariable: "primary_foreground",
    colorVariable: "--primary-foreground",
  },
  {
    storeVariable: "secondary",
    colorVariable: "--secondary",
  },
  {
    storeVariable: "secondary_foreground",
    colorVariable: "--secondary-foreground",
  },
  {
    storeVariable: "background",
    colorVariable: "--background",
  },
  {
    storeVariable: "foreground",
    colorVariable: "--foreground",
  },
  {
    storeVariable: "card",
    colorVariable: "--card",
  },
  {
    storeVariable: "card_foreground",
    colorVariable: "--card-foreground",
  },
  {
    storeVariable: "popover",
    colorVariable: "--popover",
  },
  {
    storeVariable: "popover_foreground",
    colorVariable: "--popover-foreground",
  },
  {
    storeVariable: "muted",
    colorVariable: "--muted",
  },
  {
    storeVariable: "muted_foreground",
    colorVariable: "--muted-foreground",
  },
  {
    storeVariable: "accent",
    colorVariable: "--accent",
  },
  {
    storeVariable: "accent_foreground",
    colorVariable: "--accent-foreground",
  },
  {
    storeVariable: "destructive",
    colorVariable: "--destructive",
  },
  {
    storeVariable: "destructive_foreground",
    colorVariable: "--destructive-foreground",
  },
  {
    storeVariable: "border",
    colorVariable: "--border",
  },
  {
    storeVariable: "input",
    colorVariable: "--input",
  },
  {
    storeVariable: "ring",
    colorVariable: "--ring",
  },
];

type TColorSwatch = {
  storeVariable: TStateProperties;
  colorVariable: TRootProperties;
};

const ColorSwatch = ({ storeVariable, colorVariable }: TColorSwatch) => {
  const [color, setColor] = useState<string>("#000000");
  const handleChange = (eventValue: string) => {
    (document.querySelector(":root") as HTMLElement)?.style.setProperty(
      colorVariable,
      convertHEXtoHSL_Updated(eventValue),
    );

    setColor(eventValue);
  };

  return (
    <div className="flex flex-col items-center justify-between px-2">
      <h1 className="text-xl capitalize font-medium">{storeVariable}</h1>
      <SketchPicker color={color} onChange={(e) => handleChange(e.hex)} />
    </div>
  );
};

const AsideThemeEdit = () => {
  const handleThemeCopyOnClick = () => {
    const rootStyles = getComputedStyle(document.documentElement);

    const variables = SwatchMap.reduce((acc, curr) => {
      return {
        ...acc,
        [curr.colorVariable]: rootStyles.getPropertyValue(curr.colorVariable),
      };
    }, {});

    navigator.clipboard.writeText(JSON.stringify(variables, null, 2));

    alert("Theme copied to clipboard");
  };

  return (
    <aside className="max-w-[320px] fixed left-0 z-10 w-full h-full bg-background border-r overflow-y-auto space-y-2 pb-6">
      <Button onClick={handleThemeCopyOnClick} size="icon">
        <Copy className="w-4 h-4" />
      </Button>

      <div className="flex flex-wrap w-full">
        {SwatchMap.map((currItem, idx) => {
          return (
            <ColorSwatch
              key={idx}
              storeVariable={currItem.storeVariable}
              colorVariable={currItem.colorVariable}
            />
          );
        })}
      </div>
    </aside>
  );
};
export default AsideThemeEdit;
