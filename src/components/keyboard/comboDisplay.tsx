import React, { useContext } from "react";
import { KeysContext } from "./KeysContext";
import { KeyCap } from "./keyCap";

export const ComboDisplay: React.FC = () => {
  const { keyCombo } = useContext(KeysContext);

  return (
    <div className="bg-slate-900 px-8 py-4 flex rounded-lg gap-4 h-[96px]">
      {keyCombo.map((keyConfig, index) => (
        <KeyCap key={index} config={keyConfig} allowHighlight={false} />
      ))}
    </div>
  );
};
