import { render, screen } from "../../test-utils"
import { MuiMode } from "./MuiMode"

describe("MuiMode", () => {
    test('renders text correctly', () => {
        render(<MuiMode />) 
        const header = screen.getByRole('heading');
        expect(header).toHaveTextContent('dark mode')
    }) 
})