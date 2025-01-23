import React, { useState } from "react";
import { motion } from "framer-motion";

function Join() {
  const [isOn, setIsOn] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const turnOn = () => setIsOn(true);

  const clickLogIn = () => {
    setLogIn(true);
    setSignUp(false);
  };

  const clickSignup = () => {
    setSignUp(true);
    setLogIn(false);
    };
    function close() {
        setLogIn(false)
        setSignUp(false)
    }

  const InnerContent = () => {
    if (logIn) {
      return (
        <>
          <motion.p
            className="flex justify-end w-full text-black"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: logIn ? 1 : 0, y: logIn ? 0 : -20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.svg
              onClick={close}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </motion.svg>
          </motion.p>
          <form
            action="submit"
            method="post"
            className="flex flex-col items-center gap-4"
          >
            <motion.input
              className="border-[1px] border-gray-400 px-2 py-1 rounded-md focus:outline-none"
              type="text"
              placeholder="Full Name"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: logIn ? 1 : 0, y: logIn ? 0 : -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.input
              className="border-[1px] border-gray-400 px-2 py-1 rounded-md focus:outline-none"
              type="email"
              placeholder="example@xyz.com"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: logIn ? 1 : 0, y: logIn ? 0 : -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <motion.input
              className="border-[1px] border-gray-400 px-2 py-1 rounded-md focus:outline-none"
              type="password"
              placeholder="Enter password"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: logIn ? 1 : 0, y: logIn ? 0 : -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.button
              type="submit"
              className="w-24 h-8 font-bold text-white transition-all bg-blue-500 rounded-md hover:bg-blue-600 active:bg-blue-800"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: logIn ? 1 : 0, y: logIn ? 0 : -10 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Submit
            </motion.button>
          </form>
        </>
      );
    } else if (signUp) {
      return (
        <>
          <motion.p
            className="flex justify-end w-full text-black"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: signUp ? 1 : 0, y: signUp ? 0 : -20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.svg
              onClick={close}
              
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </motion.svg>
          </motion.p>
          <form
            action="submit"
            method="post"
            className="flex flex-col items-center gap-4"
          >
            <motion.input
              className="border-[1px] border-gray-400 px-2 py-1 rounded-md focus:outline-none"
              type="email"
              placeholder="Put New Email @xyz"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: signUp ? 1 : 0, y: signUp ? 0 : -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            <motion.input
              className="border-[1px] border-gray-400 px-2 py-1 rounded-md focus:outline-none"
              type="password"
              placeholder="Add new paddword"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: signUp ? 1 : 0, y: signUp ? 0 : -20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <motion.input
              className="border-[1px] border-gray-400 px-2 py-1 rounded-md focus:outline-none"
              type="password"
              placeholder="Comfirm pasword"
              required
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: signUp ? 1 : 0, y: signUp ? 0 : -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.button
              type="submit"
              className="w-24 h-8 font-bold text-white transition-all bg-orange-500 rounded-md hover:bg-orange-600 active:bg-orange-800"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: signUp ? 1 : 0, y: signUp ? 0 : -10 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Create
            </motion.button>
          </form>
        </>
      );
    }
  };

  return (
    <div className="relative flex items-center justify-center h-10 w-80">
      <motion.button
        animate={{
          width: isOn ? "96px" : "56px",
          x: isOn ? -30 : 0,
          borderRadius: isOn ? "15px" : "none",
          textAlign: isOn ? "center" : "end",
          background: isOn
            ? "linear-gradient(135deg, #6c7f95, #e0e0e0)"
            : "linear-gradient(to left, white, #6c7f95)",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        onClick={isOn ? clickLogIn : turnOn}
        className="h-10 border-none"
      >
        <motion.span
          className="text-8"
          animate={{
            x: isOn ? 0 : 20,
            scale: isOn ? 1.6 : 1,
            color: isOn ? "white" : "black",
            opacity: isOn ? 1 : 0.6,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          {isOn ? "Log In" : "Jo"}
        </motion.span>
      </motion.button>

      <motion.div
  className={`absolute bg-white flex flex-col p-2 items-center gap-1 text-black ${
    isOn ? "block opacity-100" : "hidden opacity-0"
  }`}
  initial={{ width: "20px", height: "20px", bottom: 0, opacity: 0 }}
  animate={{
    width: logIn || signUp ? "240px" : "40px",
    height: logIn || signUp ? "240px" : "40px",
    bottom: logIn || signUp ? "-250px" : 0,
    borderRadius: logIn || signUp ? "10px" : "50%",
      opacity: isOn ? 1 : 0,  
     scale: isOn? 1: 0.6,
  }}
  transition={{
    type: "spring",
    stiffness: 250,
    damping: 20,
    duration: 0.5,
    opacity: { duration: 0.3 },  
  }}
>
  <InnerContent />
</motion.div>

          <motion.div
  className={`absolute w-6 h-6 bg-red-500 rounded-full right-[110px] cursor-pointer`}
  onClick={() => setIsOn(false)}
  initial={{ scale: 0 }}
  animate={{ scale: isOn ? 1 : 0 }} 
  exit={{ scale: 0 }} 
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
 
>
</motion.div>
      <motion.button
        animate={{
          width: isOn ? "96px" : "56px",
          x: isOn ? 60 : 0,
          borderRadius: isOn ? "15px" : "none",
          textAlign: isOn ? "center" : "start",
          background: isOn
            ? "linear-gradient(135deg, #6c7f95, #e0e0e0)"
            : "linear-gradient(to left, #6c7f95, white)",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
        }}
        onClick={isOn ? clickSignup : turnOn}
        className="h-10 border-none"
      >
        <motion.span
          animate={{
            x: isOn ? 0 : -20,
            scale: isOn ? 1.6 : 1,
            color: isOn ? "white" : "black",
            opacity: isOn ? 1 : 0.6,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        >
          {isOn ? "Sign Up" : "in"}
        </motion.span>
      </motion.button>
    </div>
  );
}

export { Join };
