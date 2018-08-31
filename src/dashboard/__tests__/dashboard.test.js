import React from "react";
import { shallow } from "enzyme";

import Dashboard from "../dashboard";

describe("DashBoard", () => {
  const wrapper = shallow(<Dashboard />);

  test("renders App component", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
