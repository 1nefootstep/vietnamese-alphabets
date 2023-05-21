import React from "react";
import useSound from "use-sound";
import "tailwindcss/tailwind.css";

const alphabet = [
  "a",
  "ă",
  "â",
  "b",
  "c",
  "d",
  "đ",
  "e",
  "ê",
  "g",
  "h",
  "i",
  "k",
  "l",
  "m",
  "n",
  "o",
  "ô",
  "ơ",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "ư",
  "v",
  "x",
  "y",
];

const LetterButton = ({ letter }) => {
  const [play] = useSound(`sounds/${letter}.mp3`, { volume: 1 });

  return (
    <button
      onClick={play}
      className="w-16 h-16 bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl rounded-full m-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
    >
      {`${letter.toUpperCase()} ${letter}`}
    </button>
  );
};

const App = () => {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen bg-gray-100 p-10">
      <h1 className="w-full text-3xl text-gray-800 font-bold text-center mb-10">
        Click to Hear Vietnamese Alphabets
      </h1>
      {alphabet.map((letter) => (
        <LetterButton key={letter} letter={letter} />
      ))}
    </div>
  );
};

export default App;
