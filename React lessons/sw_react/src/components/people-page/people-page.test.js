import React from "react";
import { shallow } from "enzyme";
import PeoplePage from "./people-page";

describe("PeoplePage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PeoplePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
