import { KeyboardProps } from "@/components/keyboard";
import { KeyboardDisplay } from "@/components/keyboard/keyboardDisplay";

const keyBindings = [
  {
    spell: {
      name: "Frost Blade",
      description: "Enchants your blade with icy magic",
      iconUrl: "/spell/icons/skill_frost_sword.jpg",
    },
    key: "1",
    modifiers: [],
  },
  {
    spell: {
      name: "Fire Blade",
      description: "Enchants your blade with firey magic",
      iconUrl: "/spell/icons/skill_fire_sword.jpg",
    },
    key: "2",
    modifiers: [],
  },
  {
    spell: {
      name: "Remove Blade Enchant",
      description: "Removes any enchants from your blade",
      iconUrl: "/spell/icons/skill_clear_element.jpg",
    },
    key: "3",
    modifiers: [],
  },
  {
    spell: {
      name: "Silence",
      description: "Stops your enemy from casting spells for 6 seconds",
      iconUrl: "/spell/icons/skill_silence.jpg",
    },
    key: "q",
    modifiers: [],
  },
] satisfies KeyboardProps["keyBindings"];

export default function Home() {
  return (
    <div className="h-screen bg-grad">
      <div className="h-screen flex justify-center items-center">
        <KeyboardDisplay bindings={keyBindings} />
      </div>
    </div>
  );
}

export const runtime = "edge";
