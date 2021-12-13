import React from 'react'
import styles from './Search.module.scss'

const Search = () => {
    return (
        <form>
            <input placeholder='Search for Characters' type="text" className=''/>
            <button className='btn btn-primary'>Search</button>
        </form>
    )
}

export default Search
