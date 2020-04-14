import React from 'react'
import SearchSuggestion from './SearchSuggestion/SearchSuggestion'
const SearchSuggestions = (props) => {
    const searchSuggestions = props.users.map((user) => {
        return <SearchSuggestion user={user} />
    })
    return (<div>
        {searchSuggestions}
    </div>)
}

export default SearchSuggestions