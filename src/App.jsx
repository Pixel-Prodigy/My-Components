import "./App.css";
import { useState } from "react";
import { Switch } from "./components/ui/turnon";
import { NavBar, NavItem } from "./components/ui/Nav";
import { Join } from "./components/ui/join";

function App() {
  const [input, setInput] = useState("");
  const [input1, setInput1] = useState("");
  const [vari, setVari] = useState("");
  const [vari1, setVari1] = useState("");
  function changeHigh(a) {
    return function change(e) {
      a(e.target.value);
    };
  }

  function handleClick() {
    setVari(input);
  }
  function handleClick1() {
    setVari1(input1);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-24 text-white bg-black app-container parent pb-[200px]">
      <h1 className="text-5xl font-extrabold cursive">My Components</h1>
      <h2 className="-mt-20 text-2xl font-bold text-orange-400">Can be y<span className="text-blue-500 ">o</span>urs T<span className="text-blue-400 ">o</span><span className="text-blue-400 ">o</span></h2>
      <div className="flex flex-wrap items-center justify-center gap-24">
        <div className="basis-1/2 sm:basis-1">
          <NavBar variant={vari1}>
            <NavItem>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
</svg>

            </NavItem>
            <NavItem>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-12">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186W.23c-.38.054-.757.112-1.134.175C2.999 Name7.58 2.105 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
</svg>

            </NavItem>
            <NavItem>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
</svg>

            </NavItem>
            <NavItem>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
</svg>

            </NavItem>
            <NavItem>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
</svg>

            </NavItem>
          </NavBar>

          <div className="flex flex-col items-center mt-8 ">
            <input
              type="text"
              placeholder="Give variant"
              className="w-56 h-10 px-4 bg-transparent border-2 border-white rounded-md shadow-md shadow-white/60 "
              value={input1}
              onChange={changeHigh(setInput1)}
            />
            <button
              onClick={handleClick1}
              className="h-8 mt-5 text-white bg-blue-500 border-none rounded-md hover:bg-blue-600 active:bg-blue-900 w-28 text-8"
            >
              Add
            </button>
          </div>
        </div>

        <div className="ml-16 basis-1/2 sm:basis-1">
          <Switch variant={vari} />
          <div className="flex flex-col items-center mt-8 ">
            <input
              type="text"
              placeholder="Give variant"
              className="w-56 h-10 px-4 -ml-6 bg-transparent border-2 border-white rounded-md shadow-md shadow-white/60 "
              value={input}
              onChange={changeHigh(setInput)}
            />
            <button
              onClick={handleClick}
              className="h-8 mt-5 text-white bg-blue-500 border-none rounded-md hover:bg-blue-600 active:bg-blue-900 w-28 text-8"
            >
              Add
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ml-16 gap-14 basis-1/2 sm:basis-1">
          <Join></Join>
          <div><p className="flex items-center text-lg"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
</svg> No <span className="mx-1 text-orange-400 line-through">Variant</span> avalable <span className="ml-2 font-bold text-red-600 underline">FOR NOW</span>
</p></div>
          </div>
      </div>
    </div>
  );
}

export default App;
