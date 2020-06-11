import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

it("should render App correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
