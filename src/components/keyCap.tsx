import Image from "next/image";

export type KeyCapProps = {
  text: string;
  size:
    | "small"
    | "small+"
    | "medium"
    | "medium+"
    | "medium++"
    | "large"
    | "space"
    | "enter"
    | "enterSkip";
  iconUrl?: string;
  iconUrlAlt?: string;
};

export const KeyCap: React.FC<KeyCapProps> = ({
  text,
  size,
  iconUrl,
  iconUrlAlt = "A spell icon",
}) => {
  const imageWidths = {
    small: 52,
    "small+": 62,
    medium: 86,
    "medium+": 100,
    "medium++": 110,
    large: 120,
    space: 430,
    enter: 84,
    enterSkip: 52,
  } satisfies Record<KeyCapProps["size"], number>;

  const keyWidthClass = (() => {
    switch (size) {
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

  const keyClass = `overflow-clip bg-slate-800 border-slate-800 border-4 ${keyWidthClass} h-[52px] flex justify-center items-center ${
    size === "enter" ? "rounded-t-md rounded-l-md" : "rounded-md"
  }`;

  if (size === "enterSkip") {
    return <div className={keyWidthClass}></div>;
  }

  return (
    <div className="bg-slate-700 pl-2 pr-1 pt-1 pb-2 rounded-md relative text-center hover:scale-105 transition-all duration-200">
      {iconUrl ? (
        <div className={keyClass}>
          <Image src={iconUrl} alt={iconUrlAlt} width={imageWidths[size]} height={52} />
        </div>
      ) : (
        <div className={keyClass}>{text}</div>
      )}
      {size === "enter" && (
        <div className="bg-slate-700 absolute pl-2 pr-1 pb-2 rounded-md left-[14px]">
          <div className="bg-slate-800 w-[72px] h-[68px] rounded-b-md"></div>
        </div>
      )}
    </div>
  );
};
