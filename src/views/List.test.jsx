import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import List from './List';

describe('List', () => {
    it('renders a list of characters', async () => {
        render(
            <List />
        );
        const person = await screen.findByText('Jim Halpert');
        expect(person).toBeInTheDocument();
    })

    it('tests search function', async () => {
        render(
            <List />
        );
        await screen.findByText('Michael Scott')
        const search = screen.getByPlaceholderText('Search');
        userEvent.type(search, 'kevin');

        return waitFor(() => {
            const result = screen.getByText('Kevin Malone');
            expect(result).toBeInTheDocument();
        })
    })
})