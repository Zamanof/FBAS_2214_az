import React from "react";
import { shallow } from "enzyme";
import ErrorIndicator from "./error-indicator";

describe("ErrorIndicator", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ErrorIndicator />);
    expect(wrapper).toMatchSnapshot();
  });
});
