import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import List from "../src/components/List";

describe("List Component", () => {

    it("Renders", () => {
        const cars = [{
            make: "Acura",
            model: "TSX",
            year: "2026",
            miles: "3,000",
            id: "1"

        }]

        render(<List list={cars} />);

        expect(screen.getByText('Acura')).toBeInTheDocument();
    })
        
})