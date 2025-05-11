/* globals describe afterEach vi it render act*/

import List from '../src/components/List'
import { expect } from 'vitest';

describe('List',() => {
    const mockedStories = {
        data: [
            {objectID: "15", title: "Open Runescape Classic", num_comments: "110", author: "reagea", url: "https://www.google.com", points: "10" },
            {objectID: "17", title: "Open-Source RuneScape Client - RuneLite", num_comments: "120", author: "fe1a56", url: "https://www.runescape.com", points: "15" },
        ]
    };
    const ListProps = {
        list: mockedStories.data, 
        onRemoveItem: vi.fn(), 
        loading: false, 
        error: false,
    }

    it('renders with content',() => {
        render(<List {...ListProps} />); 

        expect(screen.getByText("Open Runescape Classic")).toBeInTheDocument();
        expect(screen.getByText("Open-Source RuneScape Client - RuneLite")).toBeInTheDocument();
        expect(screen.getAllByRole('button')).toHaveLength(2);

    });

   
    
})