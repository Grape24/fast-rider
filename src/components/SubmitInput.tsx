import { FormEventHandler } from "react";
interface ISubmitInputProps {
    handleSubmit: FormEventHandler<HTMLFormElement>;
    placeholder: string;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SubmitInput: React.FC<ISubmitInputProps> = ({ handleSubmit, placeholder, inputValue, setInputValue}) => {
    return (<form className='submit-form-container flex' onSubmit={handleSubmit}>
        <input placeholder={placeholder} className='submit-input' type="text" name="inputField" value={inputValue} onChange={ev=> setInputValue(ev.target.value)}/>
        <input className='submit-btn' disabled={!inputValue} type="submit" value="Submit" />
    </form>)
}