import React from "react";
import renderer from "react-test-renderer";
import WeatherParams from "./WeatherParams";

it("should render WeatherParams correctly", () => {
  const tree = renderer.create(<WeatherParams />).toJSON();
  expect(tree).toMatchSnapshot();
});
