import { render, screen } from "@testing-library/react";
import { describe, it, expect} from "vitest";
import Search from '../src/components/Search'

describe("Search Component", () => {
    it("Renders", () => {
        render(<Search />);

        expect(screen.getByLabelText("Search")).toBeInTheDocument();
    })
})