import React, {useState} from 'react'

function InputField({onCreate}) {
    const [value, setValue] = useState('');

    function submitHandler(event) {
        event.preventDefault()
        if (value.trim()) {
            onCreate(value)
            setValue('')
        }
    }

    return (
        <form className="input-form" onSubmit={submitHandler}>
            <input className="input-form__input" value={value} onChange={event => setValue(event.target.value)}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default InputField