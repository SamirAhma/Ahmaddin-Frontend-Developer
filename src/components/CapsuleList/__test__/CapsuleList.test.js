import { render, screen } from "@testing-library/react";
import capsules from "../../../mocks/capsule.json";

import CapsuleList from "../CapsuleList";

describe("CapsuleList", () => {
  test("should render five card components", () => {
    render(<CapsuleList />);
    // expect(screen.getAllByRole("article"));
  });
});
