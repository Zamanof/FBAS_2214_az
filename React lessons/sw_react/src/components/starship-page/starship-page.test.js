import React from "react";
import { shallow } from "enzyme";
import PeoplePage from "./starship-page";
import StarshipPage from "./starship-page";

describe("StarshipPage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<StarshipPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
