import React from "react";
import renderer from "react-test-renderer";
import WeatherStatus from "./WeatherStatus";

it("should render WeatherStatus correctly", () => {
  const tree = renderer.create(<WeatherStatus />).toJSON();
  expect(tree).toMatchSnapshot();
});
