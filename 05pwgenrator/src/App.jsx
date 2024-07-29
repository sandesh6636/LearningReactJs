import { useState, useEffect, useRef, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //Ref hook
  const passwordRef = useRef(null);

  const copyToClipBoard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  const passwordGenerator = useCallback(
    function () {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (numberAllowed) str += "0123456789";
      if (charAllowed) str += "$!_#@&";

      for (let index = 1; index < length; index++) {
        let characterIndex = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(characterIndex);
      }
      setPassword(pass);
    },
    [length, numberAllowed, charAllowed, setPassword]
  );

  // passwordGenerator() --> this gives error , infnite loops walla because we are using useCallback()
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto px-4 py-3 my-8 rounded-lg text-orange-500 bg-gray-700">
        <h1 className="text-2xl text-center text-white  my-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            placeholder="password"
            className="outline-none w-full py-1 px-3"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none bg-green-400  text-white px-4 py-4 shrink-0"
            onClick={copyToClipBoard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm  gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>length : {length}</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="inputNumber"
              onChange={() => {
                setNumberAllowed((prv) => !prv);
              }}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="inputCharcter"
              onChange={() => {
                setCharAllowed((prv) => !prv);
              }}
            />
            <label>Special character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
