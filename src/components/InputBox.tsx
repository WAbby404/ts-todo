import React from 'react';

type TextProps = {
    children: string
    inputValue: string
    handleSubmitInput: (text: string) => void
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function InputBox({ children, inputValue, handleSubmitInput, handleChange}: TextProps) {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmitInput(inputValue);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={inputValue} onChange={handleChange} placeholder={children}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default InputBox;