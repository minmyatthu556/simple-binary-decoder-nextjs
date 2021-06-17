import React, { useState } from 'react';

import { data } from '../data';

const TranslateForm = (props) => {
  const { inputType } = props;

  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState('');

  const handleTranslate = (event) => {
    event.preventDefault();
    let arrayedText = '';
    let convertedOutput = [];

    if (inputType === 'bi') {
      arrayedText = inputValue.split(' ');
    } else if (inputType === 'eng') {
      arrayedText = inputValue.split('');
    }
    for (let index = 0; index < arrayedText.length; index++) {
      convertedOutput.push(data[arrayedText[index]]);
    }

    if (inputType === 'bi') {
      setOutput(convertedOutput.join(''));
    } else if (inputType === 'eng') {
      setOutput(convertedOutput.join(' '));
    }
    console.log(arrayedText);
    console.log(convertedOutput);
  };
  console.log(output);

  return (
    <div className="my-8 mx-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="p-6 sm:py-8 sm:px-12">
        <form onSubmit={handleTranslate} className="">
          <div className="pb-4">
            <label htmlFor="input" className="text-sm sm:text-lg font-bold">
              Input
            </label>
          </div>
          <textarea
            id="input"
            className="w-full px-3 py-2 text-xs sm:text-sm text-grayish-black border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
            name="translate"
            value={inputValue}
            cols="30"
            rows="10"
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={`${
              inputType === 'bi'
                ? 'Enter your binary code here'
                : 'Enter your text here'
            }`}
          ></textarea>
          <div className="text-center">
            <button className="py-2 px-4 sm:py-4 sm:px-6 mt-8 text-xs sm:text-sm bg-grayish-black text-white rounded-full uppercase font-semibold tracking-wider shadow-lg hover:bg-gray-900 transition transform hover:-translate-y-0.5 active:bg-black focus:outline-none focus:ring focus:ring-offset-1 focus:ring-grayish-black">
              Translate
            </button>
          </div>
        </form>
        <div className="my-4 max-w-lg">
          <h3 className="text-sm sm:text-lg font-bold">Output</h3>
          <p className="text-sm sm:text-base">{output}</p>
        </div>
      </div>
    </div>
  );
};

export default TranslateForm;
