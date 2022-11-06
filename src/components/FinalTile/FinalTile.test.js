import { render } from "@testing-library/react";
import FinalTile from "./FinalTile";

describe("FinalTile tests", () => {
  it("should render", () => {
    const { container } = render(<FinalTile />);
    expect(container).toMatchSnapshot();
  });
});
