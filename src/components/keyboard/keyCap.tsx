"use client";

import Image from "next/image";
import { useContext } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { KeysContext } from "./KeysContext";
import { KeyConfig } from "./keyboardRows";

export type KeyCapProps = {
  config: KeyConfig;
  allowHighlight?: boolean;
  iconUrl?: string;
  iconUrlAlt?: string;
};

export const KeyCap: React.FC<KeyCapProps> = ({
  config,
  allowHighlight = true,
  iconUrl,
  iconUrlAlt = "A spell icon",
}) => {
  const { lastKeyPress, setLastKeyPress } = useContext(KeysContext);
  useHotkeys(config.keyName, (e) => {
    e.preventDefault();
    setLastKeyPress(config);
  });

  const imageWidths = {
    small: 42,
    "small+": 52,
    medium: 76,
    "medium+": 90,
    "medium++": 100,
    large: 110,
    space: 420,
    enter: 74,
    enterSkip: 42,
  } satisfies Record<KeyConfig["size"], number>;

  const keyWidthClass = (() => {
    switch (config.size) {
      case "small":
        return "w-[52px]";
      case "small+":
        return "w-[62px]";
      case "medium":
        return "w-[86px]";
      case "medium+":
        return "w-[100px]";
      case "medium++":
        return "w-[110px]";
      case "large":
        return "w-[120px]";
      case "space":
        return "w-[430px]";
      case "enter":
        return "w-[86px]";
      case "enterSkip":
        return "w-[84px]";
      default:
        return "w-[52px]";
    }
  })();

  const keyClass = `overflow-clip bg-slate-800 ${
    allowHighlight && lastKeyPress?.keyName === config.keyName
      ? "bg-yellow-600"
      : ""
  }  ${keyWidthClass} h-[52px] flex justify-center items-center ${
    config.size === "enter" ? "rounded-t-md rounded-l-md" : "rounded-md"
  }`;

  if (config.size === "enterSkip") {
    return <div className={keyWidthClass}></div>;
  }

  return (
    <div className="bg-slate-700 pl-2 pr-1 pt-1 pb-2 rounded-md relative text-center hover:scale-105 transition-all duration-200">
      {iconUrl ? (
        <div className={keyClass}>
          <Image
            src={iconUrl}
            alt={iconUrlAlt}
            width={imageWidths[config.size]}
            height={42}
          />
        </div>
      ) : (
        <div className={keyClass}>{config.text}</div>
      )}
      {config.size === "enter" && (
        <div className="bg-slate-700 absolute pl-2 pr-1 pb-2 rounded-md left-[14px]">
          <div
            className={`bg-slate-800 w-[72px] h-[68px] rounded-b-md ${
              allowHighlight && lastKeyPress?.keyName === config.keyName
                ? "bg-yellow-600"
                : ""
            }`}
          ></div>
        </div>
      )}
    </div>
  );
};
