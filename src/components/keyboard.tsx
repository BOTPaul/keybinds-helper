import { KeyCap, KeyCapProps } from "./keyCap";

export type KeyboardProps = {
  rows: KeyCapProps[][];
};

export const Keyboard: React.FC<KeyboardProps> = ({ rows }) => {
  return (
    <div className="bg-slate-900 flex flex-col gap-1 p-4 rounded-lg">
      {rows.map((row) => (
        <div className="flex gap-1">
          {row.map((keyCap) => (
            <KeyCap text={keyCap.text} size={keyCap.size} />
          ))}
        </div>
      ))}
    </div>
  );
};
