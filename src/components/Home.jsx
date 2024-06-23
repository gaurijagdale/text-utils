import React, { useState } from 'react';
import '@fontsource/inter';



export default function Home(props) {

    const handleUpclick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase")
    }

    const handlelowclick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase")
    }

    const handleClr = () => {
        setText('');
        props.showAlert("Text cleared")
    }

    const handleCapitalizeText = () => {
        let newText = text.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
        setText(newText);
        props.showAlert("Converted to capitalized text")
    }

    const handleOnchange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('');

    return (

        <div className={`p-10 text-center items-center space-y-5 flex flex-col ${props.mode === 'dark' ? 'bg-DBlue text-white' : 'bg-LBlue text-black'}`}>
            {/* <div className=' w-full flex justify-end'>
                <button className=' bg-blue-600 p-3 rounded-full text-white hover:bg-blue-900' onClick={props.toggleMode}>
                    {props.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div> */}
            <h1 className={`font-semibold text-2xl`}>Enter Text</h1>
            <textarea className="border  rounded-xl bg-gray-50 w-3/5 h-60 p-4 text-black shadow-transparent" value={text} onChange={handleOnchange} aria-label="With textarea"></textarea>
            {/* <div className=" border border-slate-600 w-96 h-60" aria-label="With textarea"></div> */}
            <div className=' space-x-2'>
                <button className=' bg-blue-600 p-3 rounded-full text-white hover:bg-blue-900' onClick={handleUpclick}>Uppercase</button>
                <button className=' bg-blue-600 p-3 rounded-full text-white hover:bg-blue-900' onClick={handlelowclick}>Lowercase</button>
                <button className=' bg-blue-600 p-3 rounded-full text-white hover:bg-blue-900' onClick={handleClr}>Clear Text</button>
                <button className=' bg-blue-600 p-3 rounded-full text-white hover:bg-blue-900' onClick={handleCapitalizeText}>Capitalize Text</button>
            </div>

            <div className=' space-y-3 w-3/5'>
                <h1 className=' text-lg font-semibold'>Your text summary</h1>
                <div className={`${props.mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    <p className=''>{text.split(" ").length} words and {text.length} characters</p>
                    <p className=''>{0.008 * text.split(" ").length} minutes to read</p>
                </div>
                <h2 className=' text-lg font-semibold '>Preview</h2>
                <p className={`${props.mode === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{text.length > 0 ? text : "Enter something to preview here"}</p>
            </div>

        </div>

    )
}
