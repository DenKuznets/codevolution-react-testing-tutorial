// Greet should render the text hello and if a name is passed into the component it should render hello followed by the name

import { render, screen } from "@testing-library/react";
import { Greet } from "./Greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const element = screen.getByText(/hello/i);
    expect(element).toBeInTheDocument();
  });

  test("renders with a name", () => {
    const name = "Denis";
    render(<Greet name={name} />);
    const element = screen.getByText(`Hello ${name}`);
    expect(element).toBeInTheDocument();
  });
});
