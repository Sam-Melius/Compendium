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
        await screen.findByText('Jim Halpert');

        const search = await screen.getByPlaceholderText('Find Character');
        userEvent.type(search, 'jim');


        return waitFor(() => {
            const result = screen.getByText('Jim Halpert');
            expect(result).toBeInTheDocument();
        })
    })
})