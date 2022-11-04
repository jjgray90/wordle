import { render } from "@testing-library/react";
import Keyboard from "./Keyboard";

describe("Keyboard tests", () => {
  it("should render", () => {
    const { container } = render(<Keyboard />);
    expect(container).toMatchSnapshot();
  });
});
