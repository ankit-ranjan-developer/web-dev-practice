/**
 * "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
 * "0123456789"
 * "!@#$%^&*-_+=[]{}~`"
 */

/**
 * Use React hooks like :-
 * 1. useState
 * 2. useCallback
 * 3. useEffect
 * 4. useRef
 */

import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(10);
  const [haschar, sethaschar] = useState(false);
  const [hasnum, sethasnum] = useState(false);
  const [password, setpassword] = useState("");
  const [isCopied, setCopied] = useState(false);

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(haschar) str+="!@#$%^&*-_+=[]{}~`";
    if(hasnum) str+="0123456789";

    for(let i = 0; i < length; i++) {
        pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setpassword(pass);
  }, [length, haschar, hasnum]);
  // }, [password]);
  
  // setCopied((copy)=>!copy);

  useEffect(()=> {
    passwordGenerator();
  }, [length, haschar, hasnum]);
  // }, []);


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
    setCopied((copy)=>!copy);
  }, [password])


  return (
    <>
      <div className="max-w-md mx-auto my-8 p-6 bg-slate-900 text-white rounded-xl shadow-md font-sans">
        <h1 className="text-xl font-bold text-center mb-5 text-amber-500">
          Password Generator
        </h1>

        {/* Password display and copy button */}
        <div className="flex mb-5 rounded-lg overflow-hidden border border-slate-700">
          <input
            className="w-full px-4 py-2 bg-slate-800 text-amber-400 font-mono text-lg focus:outline-none"
            type="text"
            readOnly
            placeholder="PASSWORD"
            value={password}
            ref={passwordRef}
          />
          <button className="bg-amber-600 hover:bg-amber-500 text-slate-900 font-bold px-5 transition-colors"
          onClick={copyPasswordToClipboard}
          >
            {isCopied ? "Copied" : "Copy"}
          </button>
        </div>

        {/* Controls section */}
        <div className="flex flex-col gap-4 text-sm text-slate-300">
          {/* Length Slider */}
          <div className="flex items-center gap-x-3">
            <input
              type="range"
              min={8}
              max={32}
              value={length}
              className="cursor-pointer accent-amber-500 flex-1"
              onChange={(e) => {setlength(e.target.value)}}
            />
            <label className="font-mono text-amber-500 w-6 text-right">
              {length}
            </label>
          </div>

          {/* Checkboxes */}
          <div className="flex items-center gap-x-6 justify-center pt-2 border-t border-slate-800">
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                id="numbers"
                className="accent-amber-500 w-4 h-4"
                onChange={() => {
                    sethasnum((prev) => !prev);
                }}
              />
              <label htmlFor="numbers" className="cursor-pointer select-none">
                Numbers
              </label>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                type="checkbox"
                id="chars"
                className="accent-amber-500 w-4 h-4"
                onChange={() => {sethaschar(!haschar)}}
                // onChange={() => {
                //     sethaschar((prev) => !prev);
                // }}
              />
              <label htmlFor="chars" className="cursor-pointer select-none">
                Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
