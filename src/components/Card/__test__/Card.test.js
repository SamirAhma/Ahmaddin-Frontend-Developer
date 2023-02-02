import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../Card";

const capsuleCard = {
  capsule_serial: "C101",
  details: "This is a test capsule",
  original_launch: "2022-01-01T00:00:00.000Z",
  status: "active",
  type: "dragon",
};

describe("Card", () => {
  test("renders the capsule serial", () => {
    const { getByText } = render(<Card capsuleCard={capsuleCard} />);

    expect(getByText("C101")).toBeInTheDocument();
  });
  test("renders the capsule details", () => {
    const { getByText } = render(<Card capsuleCard={capsuleCard} />);

    expect(
      getByText(/Additional Info: This is a test capsule/i)
    ).toBeInTheDocument();
  });
  test("renders the capsule launch date", () => {
    const { getByText } = render(<Card capsuleCard={capsuleCard} />);

    expect(getByText("Date: 1/1/2022")).toBeInTheDocument();
  });
  test("renders the capsule status", () => {
    const { getByText } = render(<Card capsuleCard={capsuleCard} />);

    expect(getByText("Status: active")).toBeInTheDocument();
  });
  test("renders the capsule type", () => {
    const { getByText } = render(<Card capsuleCard={capsuleCard} />);

    expect(getByText("Type: dragon")).toBeInTheDocument();
  });

  test("should show image with correct src", () => {
    render(<Card capsuleCard={capsuleCard} />);
    expect(screen.getByAltText(/capsule/i).src).toMatch(/capsule.jpg$/);
  });
});
