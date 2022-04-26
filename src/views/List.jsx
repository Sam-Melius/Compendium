import { useEffect, useState } from "react";

export default function List() {
    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    const searching = !!search.length;
    const list = searching ? results : characters;

    const handleSearch = (event) => {
        setSearch(event.target.value);
        const filteredSearch = characters.filter((character) => 
        character.name.toLowerCase().includes(event.target.value.toLowerCase().trim()));
        setResults(filteredSearch);
    }

    useEffect(() => {
        const getCharacter = async () => {
            const res = await fetch('https://www.officeapi.dev/api/characters/');
            const { data } = await res.json();
            const characterData = data.map((character) => ({
                id: character._id,
                name: `${character.firstname} ${character.lastname}`
            }));
            setCharacters(characterData);
        };
        getCharacter();
    }, []);
    return (
        <>
        <h1>List of Characters</h1>
        <>
        <input
            placeholder="Search"
            value={search}
            onChange={handleSearch} />
        <ul>
            {list.map((character) => {
                return (
                    <li key={character.id}>
                        {character.name}
                    </li>
                )
            })}
        </ul>
        </>
        </>
    )
}
