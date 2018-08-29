import React from "react";
import { shallow } from "enzyme";

import App from "./App";

describe("App", () => {
  const wrapper = shallow(<App />);

  test("renders App component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
