import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const variantClassParent = {
  primary: "bg-gray-950 rounded-[100px] shadow-sm shadow-white/60",
  secondary: "bg-white rounded-[100px] shadow-sm shadow-black/60",
  third: "bg-blue-800 rounded-[100px] shadow-sm shadow-black/60",
};

const variantClassChild = {
  primary: "bg-black text-white shadow-md shadow-white/40",
  secondary: "bg-black text-white shadow-md shadow-white/40",
};

const NavItem = ({ children, variant }) => {
  const addRound = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      className: child.props.className
        ? `${child.props.className} rounded-full`
        : "rounded-full",
    })
  );

  return (
    <motion.div
      whileHover={{
        y: -28,
        scale: 1.3,
      }}
      transition={{
        scale: { duration: 0.2, ease: "easeInOut" },
        y: { duration: 0.3, ease: "easeInOut" },
      }}
      initial={{ y: 0, scale: 1 }}
      animate={{ y: 0, scale: 1 }}
      className={`rounded-full flex justify-center items-center h-14 w-14 ${variantClassChild[variant]}`}
    >
      {addRound}
    </motion.div>
  );
};

function NavBar({ children, variant = "primary" }) {
  const [errorMsg, setErrorMsg] = useState("");
  const updatedChildren = React.Children.map(children, (child) =>
    React.cloneElement(child, { variant })
  );

  useEffect(() => {
    if (variant && !variantClassParent[variant]) {
      setErrorMsg(
        `${variant} is not a valid variant. Please add from (primary, secondary or third)`
      );
    } else {
      setErrorMsg("");
    }
  }, [variant]);

  return (
    <>
      {errorMsg && (
        <motion.p
          className="mb-6 text-red-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {errorMsg}
        </motion.p>
      )}

      <div
        className={`w-fit h-24 flex flex-nowrap gap-2 justify-around items-center px-8 ${
          variant && variantClassParent[variant] ? variantClassParent[variant] : variantClassParent["primary"]
        }`}
      >
        {updatedChildren}
      </div>
    </>
  );
}

export { NavBar, NavItem };