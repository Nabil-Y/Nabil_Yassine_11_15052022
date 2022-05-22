import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Header from "./components/Layout/Header";
import Home from "./pages/Home/Home";

describe("Header tests", () => {
  render(<Header />, { wrapper: MemoryRouter });
  test("Header render links", () => {
    const aboutLink = screen.getByText("A Propos");
    const homeLink = screen.getByText("Accueil");
    expect(aboutLink).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
  });
  // test("Header navigation clicks", async () => {
  //   const homeLink = screen.getByText("Accueil");
  //   userEvent.click(homeLink);
  //   await waitFor(screen.getByText("Chez vous"));
  //   const homeBannerText = screen.getByText("Chez vous");
  //   expect(homeBannerText).toBeInTheDocument();
  // });
});
