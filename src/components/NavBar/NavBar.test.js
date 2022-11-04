import { render } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar tests", () => {
  it("should render", () => {
    const { container } = render(<NavBar />);
    expect(container).toMatchSnapshot();
  });
});
