import { render } from "@testing-library/react";
import WordRow from "./WordRow";

describe("WordRow tests", () => {
  it("should render", () => {
    const { container } = render(<WordRow />);
    expect(container).toMatchSnapshot();
  });
});
