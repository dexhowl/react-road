/* globals describe render afterEach vi it renderHook act fireEvent*/

import { expect, it } from 'vitest'
import Item from '../src/components/Item'

const storyOne = {
    objectId: "17", 
    title: "Open-Source RuneScape Client - RuneLite", 
    author: "twodulce",
    url: "https://runelite.net/", 
    num_comments: 220, 
    points: 5,
 }

describe('Item',() => {
    it('renders with props',() => {
        render(<Item item={storyOne}/>)

        expect(screen.getByText("Open-Source RuneScape Client - RuneLite")).toBeInTheDocument();
        expect(screen.getByText("View Article")).toHaveAttribute('href', "https://runelite.net/" )
    })

    it('renders button',() => {
        render(<Item item={storyOne}/>);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('executes callback on button click',() => {
        const handleRemoveItem = vi.fn();

        render(<Item item={storyOne} onRemoveItem={handleRemoveItem}/>)

        fireEvent.click(screen.getByRole('button'))

        expect(handleRemoveItem).toHaveBeenCalledOnce(); 
    });

    

    
})