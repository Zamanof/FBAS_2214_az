import React from "react";
import { shallow } from "enzyme";
import PeoplePage from "./planet-page";

describe("PlanetPage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PlanetPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
