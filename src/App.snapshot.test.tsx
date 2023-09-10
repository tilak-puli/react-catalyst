import renderer from "react-test-renderer";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  it("renders learn react link", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
