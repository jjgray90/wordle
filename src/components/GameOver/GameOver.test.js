import { render } from "@testing-library/react";
import GameOver from "./GameOver";

describe("GameOver tests", () => {
  it("should render", () => {
    const { container } = render(<GameOver />);
    expect(container).toMatchSnapshot();
  });
});
