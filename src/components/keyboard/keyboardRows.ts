import { KeyboardProps } from ".";

export type KeyConfig = {
  keyName: string;
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
};

export const keyboardRows: KeyConfig[][] = [
  [
    { keyName: "esc", text: "esc", size: "small" },
    { keyName: "F1", text: "F1", size: "small" },
    { keyName: "F2", text: "F2", size: "small" },
    { keyName: "F3", text: "F3", size: "small" },
    { keyName: "F4", text: "F4", size: "small" },
    { keyName: "F5", text: "F5", size: "small" },
    { keyName: "F6", text: "F6", size: "small" },
    { keyName: "F7", text: "F7", size: "small" },
    { keyName: "F8", text: "F8", size: "small" },
    { keyName: "F9", text: "F9", size: "small" },
    { keyName: "F10", text: "F10", size: "small" },
    { keyName: "F11", text: "F11", size: "small" },
    { keyName: "F12", text: "F12", size: "small" },
    { keyName: "printscreen", text: "prt scr", size: "small" },
    { keyName: "delete", text: "del", size: "small" },
    { keyName: "💡", text: "💡", size: "small" },
  ],
  [
    { keyName: "`", text: "` ¬", size: "small" },
    { keyName: "1", text: "1", size: "small" },
    { keyName: "2", text: "2", size: "small" },
    { keyName: "3", text: "3", size: "small" },
    { keyName: "4", text: "4", size: "small" },
    { keyName: "5", text: "5", size: "small" },
    { keyName: "6", text: "6", size: "small" },
    { keyName: "7", text: "7", size: "small" },
    { keyName: "8", text: "8", size: "small" },
    { keyName: "9", text: "9", size: "small" },
    { keyName: "0", text: "0", size: "small" },
    { keyName: "minus", text: "-", size: "small" },
    { keyName: "=", text: "=", size: "small" },
    { keyName: "backspace", text: "<-", size: "large" },
    { keyName: "pageup", text: "page up ", size: "small" },
  ],
  [
    { keyName: "tab", text: "tab", size: "medium" },
    { keyName: "q", text: "q", size: "small" },
    { keyName: "w", text: "w", size: "small" },
    { keyName: "e", text: "e", size: "small" },
    { keyName: "r", text: "r", size: "small" },
    { keyName: "t", text: "t", size: "small" },
    { keyName: "y", text: "y", size: "small" },
    { keyName: "u", text: "u", size: "small" },
    { keyName: "i", text: "i", size: "small" },
    { keyName: "o", text: "o", size: "small" },
    { keyName: "p", text: "p", size: "small" },
    { keyName: "[", text: "[ {", size: "small" },
    { keyName: "]", text: "] }", size: "small" },
    { keyName: "enter", text: "<-", size: "enter" },
    { keyName: "pagedown", text: "page down ", size: "small" },
  ],
  [
    { keyName: "capslock", text: "caps", size: "medium+" },
    { keyName: "a", text: "a", size: "small" },
    { keyName: "s", text: "s", size: "small" },
    { keyName: "d", text: "d", size: "small" },
    { keyName: "f", text: "f", size: "small" },
    { keyName: "g", text: "g", size: "small" },
    { keyName: "h", text: "h", size: "small" },
    { keyName: "j", text: "j", size: "small" },
    { keyName: "k", text: "k", size: "small" },
    { keyName: "l", text: "l", size: "small" },
    { keyName: ";", text: "; :", size: "small" },
    { keyName: "'", text: "' @", size: "small" },
    { keyName: "#", text: "# ~", size: "small" },
    { keyName: "", text: "", size: "enterSkip" },
    { keyName: "home", text: "home", size: "small" },
  ],
  [
    { keyName: "shiftleft", text: "shift", size: "small+" },
    { keyName: "\\", text: "\\ |", size: "small" },
    { keyName: "z", text: "z", size: "small" },
    { keyName: "x", text: "x", size: "small" },
    { keyName: "c", text: "c", size: "small" },
    { keyName: "v", text: "v", size: "small" },
    { keyName: "b", text: "b", size: "small" },
    { keyName: "n", text: "n", size: "small" },
    { keyName: "m", text: "m", size: "small" },
    { keyName: "comma", text: ", <", size: "small" },
    { keyName: ".", text: ". >", size: "small" },
    { keyName: "/", text: "/ ?", size: "small" },
    { keyName: "shiftright", text: "shift", size: "medium++" },
    { keyName: "arrowup", text: "^", size: "small" },
    { keyName: "end", text: "end", size: "small" },
  ],
  [
    { keyName: "controlleft", text: "ctrl", size: "small+" },
    { keyName: "meta", text: "🪟", size: "small+" },
    { keyName: "altleft", text: "alt", size: "small+" },
    { keyName: "space", text: "___", size: "space" },
    { keyName: "altright", text: "alt", size: "small" },
    { keyName: "fn", text: "fn", size: "small" },
    { keyName: "controlright", text: "ctrl", size: "small" },
    { keyName: "arrowleft", text: "<", size: "small" },
    { keyName: "arrowdown", text: "v", size: "small" },
    { keyName: "arrowright", text: ">", size: "small" },
  ],
];
