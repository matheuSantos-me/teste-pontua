import React from "react";
import { render } from "@testing-library/react-native";
import { LogoComponent } from "./Logo";

jest.mock("react-native-svg", () => ({
  SvgXml: () => null,
}));

describe("LogoComponent", () => {
  it("should render the component correctly", () => {
    const height = "100";
    const width = "200";

    const { findByTestId } = render(
      <LogoComponent height={height} width={width} />
    );

    const svgElement = findByTestId("logo");

    expect(svgElement).toBeTruthy();
  });
});
