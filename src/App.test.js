import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./components/Layout/Header";

describe("Header tests", () => {
  render(<Header />, { wrapper: MemoryRouter });
  test("Header render links", () => {
    const aboutLink = screen.getByText("A Propos");
    const homeLink = screen.getByText("Accueil");
    expect(aboutLink).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
  });
});
