import React from 'react'
import SearchSuggestion from './SearchSuggestion/SearchSuggestion'
import { Spinner } from 'react-bootstrap'
import classes from './SearchSuggestions.module.css'
const SearchSuggestions = (props) => {
    let searchSuggestions = props.users.map((user) => {
        return <SearchSuggestion user={user} />
    })
    if (props.loading) {
        searchSuggestions = <Spinner animation="border" variant="info" />
    }
    return (<div className={classes.SearchSuggestions}>
        {searchSuggestions}
    </div>)
}

export default SearchSuggestions