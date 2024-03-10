import { render, screen } from "@testing-library/react";
import { KeyCap } from "../keyCap";

describe("KeyCap", () => {
  it("renders a keycap", () => {
    render(<KeyCap size="small" text="test" />);

    const keyCap = screen.getByText("test");

    expect(keyCap).toBeInTheDocument();
  });
});
