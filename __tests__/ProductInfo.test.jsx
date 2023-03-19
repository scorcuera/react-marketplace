import ProductInfo from "../src/components/ProductInfo";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

vi.mock('react-router-dom', () => ({
    useLoaderData: vi.fn(() => ({
        product: {
            title: 'test product',
            description: 'This is a test item',
            price: 9.99,
            image: 'https://example.com/product.jpg',
        },
    })),
}));

describe("ProductInfo", () => {
    beforeEach(() => {
        render(<ProductInfo />);
    })

    test('should render product title', () => {
        const titleElement = screen.getByText(/test product/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('should render product description', () => {
        const descriptionElement = screen.getByText(/this is a test item/i);
        expect(descriptionElement).toBeInTheDocument();
    });

    test('should render product price', () => {
        const priceElement = screen.getByText(/price: 9.99/i);
        expect(priceElement).toBeInTheDocument();
    });

    test('should render product image', () => {
        const imageElement = screen.getByRole('img');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveStyle("background-image: url(https://example.com/product.jpg)");
    });
})