import React, { useState } from 'react'
import './TodoForm.css'

interface TodoFormProps  {
    onClickAdd: (title: string) => void,
}

const TodoForm: React.FC<TodoFormProps> = ({onClickAdd}) => {
    const [inputValue, setInputValue] = useState<string>("");

    const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

    

    const handleButtonClick = () => {
        if (inputValue.length) {
            onClickAdd(inputValue);
        }
        setInputValue("");
    }

    return (
        <div className='inputForm'>
            <label className='labelInput' htmlFor="textInput">Enter a Todo</label>
            <input
                value={inputValue}
                onChange={handleInputValue}
                className='inputValue'
                type="text"
                id='textInput'
                placeholder='Enter a Todo'
            />
            <button className="form__button" onClick={handleButtonClick} type='button'>Create a Todo</button>
        </div>
    );
}

export default TodoForm