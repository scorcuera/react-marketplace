import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "../src/pages/Dashboard";

vi.mock("react-router-dom", () => ({
    useLoaderData: vi.fn(() => ({
        products: [
            {
                id: 1,
                title: 'amuleto',
                description: 'muy bonito y mágico',
                price: 20.99,
                image: 'https://example.com/amuleto.jpg',
            },
            {
                id: 2,
                title: 'bicicleta',
                description: 'en buen estado',
                price: 50.99,
                image: 'https://example.com/bicicleta.jpg',
            },
        ]
    })),
    Link: vi.fn()
}))

beforeEach(() => {
    render(<Dashboard />)
})

describe("Dashboard rendering", () => {
    test("should render search bar", () => {
        screen.debug();
        const searchElement = screen.getByText(/search/i);
        expect(searchElement).toBeInTheDocument();
    })

    test("should render delete button", () => {
        const deleteButtonElements = screen.getAllByRole("button", { name: /delete/i });
        expect(deleteButtonElements[0]).toBeInTheDocument();
    })

    test("should render title of second product", () => {
        const productTwoElement = screen.getByText(/bicicleta/);
        expect(productTwoElement).toBeInTheDocument();
    })

    test("should render title of first product", () => {
        const productOneElement = screen.getByText(/amuleto/);
        expect(productOneElement).toBeInTheDocument();
    })
})

describe("Dashboard behavior", () => {
    test("should filter by name", () => {
        const searchEl = screen.getByText(/search/i);
        searchEl.value = '2';
        fireEvent.change(searchEl);

        const filteredProduct = screen.getByText(/bicicleta/);
        expect(filteredProduct).toBeInTheDocument();
        expect(screen.queryByText('amuleto')).not.toBeInTheDocument();
    })
})
