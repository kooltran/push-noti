import React from "react";
import renderer from "react-test-renderer";
import Layout from "./Layout";

it("should render Layout correctly", () => {
  const tree = renderer.create(<Layout />).toJSON();
  expect(tree).toMatchSnapshot();
});
