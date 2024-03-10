import { KeyCap, KeyCapProps } from "./keyCap";
import { KeyConfig } from "./keyboardRows";

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
  rows: KeyConfig[][];
  iconMode?: boolean;
  keyBindings?: Keybinding[];
};

export const Keyboard: React.FC<KeyboardProps> = ({
  rows,
  iconMode = false,
  keyBindings = [],
}) => {
  const mappedKeyBindings = rows.map((row) =>
    row.map((keyConfig) => {
      if (!iconMode) return { config: keyConfig };

      const binding = keyBindings.find(
        (keyBinding) => keyBinding.key === keyConfig.text
      );
      if (!binding) return { config: keyConfig };

      return {
        config: keyConfig,
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
              config={keyCap.config}
              iconUrl={keyCap.iconUrl}
              iconUrlAlt={keyCap.iconUrlAlt}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
