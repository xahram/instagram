import React, { useState } from 'react'

const InputState = (initialVal) => {
    const [val, setValue] = useState(initialVal = '')
    const onChangeHandler = (e) => {
        setValue(e.target.value)
    }
    const reset = () => {
        setValue(initialVal)
    }
    return [val, onChangeHandler, reset]
}

export default InputState 