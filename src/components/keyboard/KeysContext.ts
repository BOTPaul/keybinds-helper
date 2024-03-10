import { createContext } from "react";
import { KeyConfig } from "./keyboardRows";

type KeysContext = {
  keyCombo: KeyConfig[];
  lastKeyPress?: KeyConfig;
  setLastKeyPress: (lastKey: KeyConfig) => void;
};

export const KeysContext = createContext<KeysContext>({
  keyCombo: [],
  setLastKeyPress: (lastKey: KeyConfig) => {},
});
