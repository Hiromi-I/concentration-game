import { describe, it, expect } from "vitest";
import { render } from "@testing-library/vue";

import type { Card } from "@/types/card";
import CardItem from "@/components/CardItem.vue";

describe("CardItem", () => {
  it("renders div.card-back", () => {
    const props: Card = { number: 1, isTurned: false, isPaired: false };

    const { container } = render(CardItem, { props });
    const back = container.querySelector(".card-back");
    
    expect(back).toBeInTheDocument();
  });

  it("renders img", () => {
    const props: Card = { number: 1, isTurned: true, isPaired: false };

    const { getByRole } = render(CardItem, { props });
    const image = getByRole("img");

    expect(image).toBeInTheDocument();
  });

  it("renders img.paired", () => {
    const props: Card = { number: 1, isTurned: true, isPaired: true };

    const { container } = render(CardItem, { props });
    const image = container.querySelector(".paired");

    expect(image).toBeInTheDocument();
  });
});
