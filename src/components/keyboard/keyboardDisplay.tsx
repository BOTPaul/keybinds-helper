"use client";
import React, { useCallback, useState } from "react";
import { Keyboard, KeyboardProps } from ".";
import { KeysContext } from "./KeysContext";
import { KeyConfig, keyboardRows } from "./keyboardRows";
import { ComboDisplay } from "./comboDisplay";

export type KeyboardDisplayProps = {
  bindings?: KeyboardProps["keyBindings"];
};

export const KeyboardDisplay: React.FC<KeyboardDisplayProps> = ({
  bindings,
}) => {
  const [keyCombo, setKeyCombo] = useState<KeyConfig[]>([]);
  const [lastKeyPress, setLastKeyPress] = useState<KeyConfig | undefined>(
    undefined
  );
  const [iconMode, setIconMode] = useState(false);

  const handleLastKeyPress = useCallback((lastKey: KeyConfig) => {
    setLastKeyPress(lastKey);

    console.log("SET KEY COMBO");
    setKeyCombo((prev) => {
      const newArray = [lastKey, ...prev];

      if (newArray.length > 10) {
        return newArray.splice(0, 10);
      } else {
        return newArray;
      }
    });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <KeysContext.Provider
        value={{ lastKeyPress, setLastKeyPress: handleLastKeyPress, keyCombo }}
      >
        <div>
          <div className="bg-slate-900 rounded-t-lg flex justify-between px-8 py-2">
            <h2 className="font-bold uppercase text-3xl bg-gradient-to-r from-red-600 via-red-500 to-blue-600 text-transparent bg-clip-text tracking-widest">
              Keybindings Helper
            </h2>
            <div className="flex gap-4 items-center">
              <label htmlFor="icon-mode">Show Icons?</label>
              <input
                type="checkbox"
                name="icon-mode"
                checked={iconMode}
                onChange={(e) => setIconMode(e.target.checked)}
              />
            </div>
          </div>

          <Keyboard
            rows={keyboardRows}
            keyBindings={bindings}
            iconMode={iconMode}
          />
        </div>

        <ComboDisplay />
      </KeysContext.Provider>
    </div>
  );
};
