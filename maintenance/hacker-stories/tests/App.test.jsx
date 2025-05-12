/* globals describe render expect waitFor fireEvent vi it  */
import { expect } from 'vitest';
import App from '../src/App'
import axios from 'axios';

vi.mock('axios');


describe('App', () => {
    
    const runeStory = {
        objectID: "15",
        title: "Open Runescape Classic", 
        num_comments: "110", 
        author: "reagea", 
        url: "https://www.runescape.com", 
        points: "100" 
    }

    const teslaStory = {
        objectID: "17", 
        title: "Tesla Cybertruck", 
        num_comments: "120", 
        author: "fe1a56", 
        url: "https://www.tesla.com/cybertruck", 
        points: "150" 
    }


      

    it('successfully fetches data', async () => {
        const promisedStories = Promise.resolve( {
            data: {
                hits: [
                    {objectID: "15", title: "Open Runescape Classic", num_comments: "110", author: "reagea", url: "https://www.google.com", points: "10" },
                    {objectID: "17", title: "Open-Source RuneScape Client - RuneLite", num_comments: "120", author: "fe1a56", url: "https://www.runescape.com", points: "15" },
                ]
            }});

        axios.get.mockImplementationOnce(() => promisedStories)

        render(<App />);

        expect(screen.queryByText(/Loading/)).toBeInTheDocument();
        
        await waitFor(async () => await promisedStories);
        
        expect(screen.queryByText(/Loading/)).toBeNull();

        expect(screen.getByText("Open Runescape Classic")).toBeInTheDocument();
        expect(screen.getByText("Open-Source RuneScape Client - RuneLite")).toBeInTheDocument();
        expect(screen.getAllByText('Delete')).toHaveLength(2);
        
    });

    it('fails to fetch data', async () => {
        const promisedStories = Promise.reject();

        axios.get.mockImplementationOnce(() => promisedStories)

        render(<App />);

        expect(screen.queryByText(/Loading/)).toBeInTheDocument();
        
        try {
            await waitFor(async () => await promisedStories);
        }
        catch {
            expect(screen.queryByText(/Loading/)).toBeNull();
            expect(screen.queryByText(/Error Occured/)).toBeInTheDocument();
        }
    });

    it("removes a story", async () => {
        const promisedStories = Promise.resolve({
            data: {
                hits: [
                    {objectID: "15", title: "Open Runescape Classic", num_comments: "110", author: "reagea", url: "https://www.google.com", points: "10" },
                    {objectID: "17", title: "Open-Source RuneScape Client - RuneLite", num_comments: "120", author: "fe1a56", url: "https://www.runescape.com", points: "15" },
                ]
            }
        });

        axios.get.mockImplementationOnce(() => promisedStories);

        render(<App />);

        await waitFor(async () => await promisedStories) 

        fireEvent.click(screen.getAllByText('Delete')[0])

        expect(screen.getAllByText('Delete')).toHaveLength(1);
        expect(screen.queryByText('Open Runescape Classic')).toBeNull();
        
    });

    it("searching values", async () => {
        const promisedRuneStories = Promise.resolve({
            data: {
                hits: [runeStory],
                
            }
        });

        const promisedTeslaStories = Promise.resolve({
            data: {
                hits: [teslaStory],
                
            }
        });

        axios.get.mockImplementation((url) => {
            if (url.includes("Runescape")) {
                return promisedRuneStories;
            }
            if (url.includes("Tesla")) {
                return promisedTeslaStories; 
            }
            throw Error;
        });

        render(<App />); 

        screen.debug()

        await waitFor(() => promisedTeslaStories);

        expect(screen.getByDisplayValue('Tesla')).toBeInTheDocument();
        expect(screen.queryByDisplayValue('Runescape')).toBeNull();
        
        expect(screen.getByText(/Cybertruck/)).toBeInTheDocument();
        expect(screen.queryByText("Open Runescape Classic")).toBeNull();

        fireEvent.change(screen.getByDisplayValue("Tesla"),  {
            target: {value: "Runescape"}
        });
        
        expect(screen.queryByDisplayValue('Tesla')).toBeNull();
        expect(screen.getByDisplayValue('Runescape')).toBeInTheDocument();

        fireEvent.click(screen.queryByText('Search'))


        await waitFor(() => promisedRuneStories);
        
        expect(screen.queryByText("Tesla Cybertruck")).toBeNull();
        expect(screen.getByText(/Runescape/)).toBeInTheDocument();







        
    });

    
})

