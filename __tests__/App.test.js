import React from "react";
import renderer, { act } from "react-test-renderer";
import App from "../App";

describe("App", () => {
  it("renders without crashing", () => {
    jest.useFakeTimers();
    const rendered = renderer.create(<App />).toJSON();
    act(() => {
      jest.runAllTimers();
    });
    expect(rendered).toBeTruthy();
  });
});
// test("home snapshot", () => {
//   const snap = renderer.create(<App />).toJSON();
//   expect(snap).toMatchSnapshot();
// });

// it("App test against snapshot", () => {
//   const tree = renderer.create(<App />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
