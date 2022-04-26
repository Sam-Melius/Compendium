import { useEffect, useState } from "react";

export default function List() {
    const [characters, setCharacters] = useState([]);

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
        <ul>
            {characters.map((character) => {
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
