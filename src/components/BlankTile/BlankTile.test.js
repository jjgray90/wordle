import { render } from "@testing-library/react";
import BlankTile from "./BlankTile";

describe("BlankTile tests", () => {
  it("should render", () => {
    const { container } = render(<BlankTile />);
    expect(container).toMatchSnapshot();
  });
});
