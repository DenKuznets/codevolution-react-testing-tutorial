import { render, screen, logRoles } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];
  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });
  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(skills.length);
  });

  test("renders Login button", () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    // screen.debug();
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    // screen.debug();
    expect(loginButton).toBeInTheDocument();
  });
  test("does not render Start Learning button", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test.skip("renders Start learning button eventually", async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      { timeout: 2000 },
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
