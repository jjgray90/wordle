import { render } from "@testing-library/react";
import WordGrid from "./WordGrid";

describe("WordGrid tests", () => {
  it("should render", () => {
    const { container } = render(<WordGrid />);
    expect(container).toMatchSnapshot();
  });
});
