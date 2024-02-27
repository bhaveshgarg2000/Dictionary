import { useContext, useState } from 'react'
import '../App.css'
import { InputContext } from '../App';
const AppBar = () => {
    const [value, setValue] = useState("");
    const { inputValue, setInputValue, } = useContext(InputContext)
    const handleInputChange = (e) => {
        setValue(e.target.value)
    }
    const handleSubmit = () => {
        setInputValue(value)
        setValue("")
    }
    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter') {
            setInputValue(value)
            setValue("")
        }
    }
    return (
        <>
            <div className="flex justify-center items-center bg-gray-800 ">
                <div className="container mx-auto py-6">
                    <h3 className="text-white text-5xl text-center font-bold capitalize  ">
                        dictionary
                    </h3>
                    <p className='text-center text-sm text-white pt-1'>
                        Find Definitions for Words
                    </p>
                    <div className="flex justify-center items-center mt-5 shadow-lg">
                        <div className='flex border-2 border-gray-200 rounded bg-white'>
                            <input type="text" name="" id="" placeholder='Search...'
                                value={value}
                                className='px-2 py-2'
                                onChange={handleInputChange}
                                onKeyDown={handleInputKeyDown}
                            />
                            <button
                                type='submit'
                                className='p-2 bg-blue-400
                                border-lg text-white'
                                onClick={handleSubmit}>
                                Search</button>
                        </div>
                    </div>
                    {inputValue && (<h3 className='text-center mt-5 text-gray-50'>Result for : <span
                        className='text-white font-bold capitalize'>{inputValue}</span></h3>)}
                </div>
            </div>
        </>
    )
}
export default AppBar
