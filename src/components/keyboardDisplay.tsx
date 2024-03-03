"use client";
import React, { createContext, useState } from "react";
import { Keyboard, KeyboardProps } from "./keyboard";

const keyboardRows = [
  [
    { text: "esc", size: "small" },
    { text: "F1", size: "small" },
    { text: "F2", size: "small" },
    { text: "F3", size: "small" },
    { text: "F4", size: "small" },
    { text: "F5", size: "small" },
    { text: "F6", size: "small" },
    { text: "F7", size: "small" },
    { text: "F8", size: "small" },
    { text: "F9", size: "small" },
    { text: "F10", size: "small" },
    { text: "F11", size: "small" },
    { text: "F12", size: "small" },
    { text: "", size: "small" },
    { text: "del", size: "small" },
    { text: "💡", size: "small" },
  ],
  [
    { text: "` ¬", size: "small" },
    { text: "1", size: "small" },
    { text: "2", size: "small" },
    { text: "3", size: "small" },
    { text: "4", size: "small" },
    { text: "5", size: "small" },
    { text: "6", size: "small" },
    { text: "7", size: "small" },
    { text: "8", size: "small" },
    { text: "9", size: "small" },
    { text: "0", size: "small" },
    { text: "-", size: "small" },
    { text: "=", size: "small" },
    { text: "<-", size: "large" },
    { text: "page up ", size: "small" },
  ],
  [
    { text: "tab", size: "medium" },
    { text: "q", size: "small" },
    { text: "w", size: "small" },
    { text: "e", size: "small" },
    { text: "r", size: "small" },
    { text: "t", size: "small" },
    { text: "y", size: "small" },
    { text: "u", size: "small" },
    { text: "i", size: "small" },
    { text: "o", size: "small" },
    { text: "p", size: "small" },
    { text: "[ {", size: "small" },
    { text: "] }", size: "small" },
    { text: "<-", size: "enter" },
    { text: "page down ", size: "small" },
  ],
  [
    { text: "caps", size: "medium+" },
    { text: "a", size: "small" },
    { text: "s", size: "small" },
    { text: "d", size: "small" },
    { text: "f", size: "small" },
    { text: "g", size: "small" },
    { text: "h", size: "small" },
    { text: "j", size: "small" },
    { text: "k", size: "small" },
    { text: "l", size: "small" },
    { text: "; :", size: "small" },
    { text: "' @", size: "small" },
    { text: "# ~", size: "small" },
    { text: "", size: "enterSkip" },
    { text: "home", size: "small" },
  ],
  [
    { text: "shift", size: "small+" },
    { text: "\\ |", size: "small" },
    { text: "z", size: "small" },
    { text: "x", size: "small" },
    { text: "c", size: "small" },
    { text: "v", size: "small" },
    { text: "b", size: "small" },
    { text: "n", size: "small" },
    { text: "m", size: "small" },
    { text: ", <", size: "small" },
    { text: ". >", size: "small" },
    { text: "/ ?", size: "small" },
    { text: "shift", size: "medium++" },
    { text: "^", size: "small" },
    { text: "end", size: "small" },
  ],
  [
    { text: "ctrl", size: "small+" },
    { text: "🪟", size: "small+" },
    { text: "alt", size: "small+" },
    { text: "___", size: "space" },
    { text: "alt", size: "small" },
    { text: "fn", size: "small" },
    { text: "ctrl", size: "small" },
    { text: "<", size: "small" },
    { text: "v", size: "small" },
    { text: ">", size: "small" },
  ],
] satisfies KeyboardProps["rows"];

export type KeyboardDisplayProps = {
  bindings?: KeyboardProps["keyBindings"];
};

export const KeysContext = createContext({
  lastKeyPress: "",
  setLastKeyPress: (lastKey: string) => {},
});

export const KeyboardDisplay: React.FC<KeyboardDisplayProps> = ({
  bindings,
}) => {
  const [lastKeyPress, setLastKeyPress] = useState("");
  const [iconMode, setIconMode] = useState(false);

  return (
    <div>
      <KeysContext.Provider value={{ lastKeyPress, setLastKeyPress }}>
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
      </KeysContext.Provider>
    </div>
  );
};
