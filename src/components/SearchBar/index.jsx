import { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import { Container } from './styles'

export function SearchBar(){

    const [searchedValue, setSearchedValue] = useState('')

    function getUserData(e){
        e.preventDegault()

        try {
            fetch(`https://api.github.com/users/${searchedValue}`)
            .then(response => response.json())
            .then(data => console.log(data))
        } catch(error){
            console.log(error)
        }
    }
 
    return (
        <Container>
            <h1>Github Explorer</h1>
            <form onSubmit={getUserData}>
                <div> 
                    <span>githun.com/</span>
                    <input type="text"
                        value={searchedValue}
                        onChange={e => setSearchedValue(e.target.value)}
                    />
                </div>
                <button type='submit'><FiSearch/></button>
            </form>

        </Container>
    )
}