import { KeyCap, KeyCapProps } from "./keyCap";

export type Spell = {
  name: string;
  description: string;
  iconUrl: string;
};

export type Keybinding = {
  spell: Spell;
  key: string;
  modifiers: string[];
};

export type KeyboardProps = {
  rows: KeyCapProps[][];
  iconMode?: boolean;
  keyBindings?: Keybinding[];
};

export const Keyboard: React.FC<KeyboardProps> = ({
  rows,
  iconMode = false,
  keyBindings = [],
}) => {
  const mappedKeyBindings = rows.map((row) =>
    row.map((keyCap) => {
      if (!iconMode) return keyCap;

      const binding = keyBindings.find(
        (keyBinding) => keyBinding.key === keyCap.text
      );
      if (!binding) return keyCap;

      return {
        ...keyCap,
        iconUrl: binding.spell.iconUrl,
        iconUrlAlt: binding.spell.name,
      };
    })
  );

  return (
    <div className="bg-slate-900 flex flex-col gap-1 p-4 rounded-b-lg">
      {mappedKeyBindings.map((row) => (
        <div className="flex gap-1" key={JSON.stringify(row)}>
          {row.map((keyCap, index) => (
            <KeyCap
              key={index}
              text={keyCap.text}
              size={keyCap.size}
              iconUrl={keyCap.iconUrl}
              iconUrlAlt={keyCap.iconUrlAlt}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
