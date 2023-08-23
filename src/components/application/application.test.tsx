import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const elementH3 = screen.getByRole("heading", {
      name: "Hello",
    });
    expect(elementH3).toBeInTheDocument();

    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameElement2).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jpbLocationDocument = screen.getByRole("combobox");
    expect(jpbLocationDocument).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions",
    );
    expect(termsElement2).toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();

    const paragraphElement = screen.getByText("All fields are mandatory");
    expect(paragraphElement).toBeInTheDocument();
    const paragraphElement1 = screen.getByText("All fields are manda", {
      exact: false,
    });
    expect(paragraphElement1).toBeInTheDocument();
    const paragraphElement2 = screen.getByText(/All fields are manda/i);
    expect(paragraphElement2).toBeInTheDocument();

    const paragraphElement3 = screen.getByText((content) => {
      return content.startsWith("All fields");
    });
    expect(paragraphElement3).toBeInTheDocument();
  });
});
