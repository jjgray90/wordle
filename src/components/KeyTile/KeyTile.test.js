import { render } from "@testing-library/react";
import KeyTile from "./KeyTile";

describe("KeyTile tests", () => {
  it("should render", () => {
    const { container } = render(<KeyTile />);
    expect(container).toMatchSnapshot();
  });
});
