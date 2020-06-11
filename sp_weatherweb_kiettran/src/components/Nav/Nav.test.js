import React from "react";
import renderer from "react-test-renderer";
import Nav from "./Nav";

it("should render Nav correctly", () => {
  const tree = renderer.create(<Nav />).toJSON();
  expect(tree).toMatchSnapshot();
});
