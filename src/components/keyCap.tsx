export type KeyCapProps = {
  text: string;
  size: "small" | "small+" | "medium" | "medium+" | "medium++" | "large" | "space" | "enter" | "enterSkip";
};

export const KeyCap: React.FC<KeyCapProps> = ({ text, size }) => {
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

  const keyClass = `bg-slate-800 ${keyWidthClass} h-[52px] flex justify-center items-center ${size === "enter" ? "rounded-t-md rounded-l-md" : "rounded-md"}`;

  if (size === "enterSkip") {
    return <div className={keyWidthClass}></div>
  }

  return (
    <div className="bg-slate-700 pl-2 pr-1 pt-1 pb-2 rounded-md relative text-center">
      <div className={keyClass}>{text}</div>
      {size === "enter" && (
        <div className="bg-slate-700 absolute pl-2 pr-1 pb-2 rounded-md left-[14px]">
          <div className="bg-slate-800 w-[72px] h-[68px] rounded-b-md"></div>
        </div>
      )}
    </div>
  );
};
