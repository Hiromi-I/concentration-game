import { describe, it, expect, beforeEach } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { render } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import CardList from "@/components/CardList.vue";


describe("CardList", () => {

  beforeEach(() => {
    const initialState = { "card": {
      cards: [
        { number: 1, isTurned: false, isPaired: false},
        { number: 1, isTurned: false, isPaired: false},
      ],
      selectedIndexes: [],
    }};
    createTestingPinia({ initialState, stubActions: false });
  });

  it("renders 2 cards", () => {
    const { getAllByRole } = render(CardList);
    const listItems = getAllByRole("listitem");
    
    expect(listItems).toHaveLength(2);
  });

  it("renders card image", async () => {
    const { getAllByRole, findByRole } = render(CardList);
    const listitem = getAllByRole("listitem");
    
    userEvent.click(listitem[0]);
    const image = await findByRole("img")

    expect(image).toBeInTheDocument();
  });

  it("renders paired image", async () => {
    const { getAllByRole, container } = render(CardList);
    const listitem = getAllByRole("listitem");
    
    userEvent.click(listitem[0]);
    userEvent.click(listitem[1]);
    await new Promise(resolve => setTimeout(resolve, 1200));
    const images = container.querySelectorAll(".paired");

    expect(images).toHaveLength(2);
  });
});