import React, { useState } from 'react'

const InputState = (initialVal = 'Value') => {
    const [val, setValue] = useState(initialVal)
    const onChangeHandler = (e) => {
        setValue(e.target.value)
       
        
    }
    return [val, onChangeHandler]
}

export default InputState 