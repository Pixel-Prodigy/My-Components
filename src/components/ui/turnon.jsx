import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Switch({ variant = "third", ...props }) {
  const [isOn, setIsOn] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const variantCss = {
    primary: ["#b0bec5", "#4caf50"],
    secondary: ["#b0bec5", "#2196f3"],
    third: [
      "linear-gradient(to right, #f7c6a3, #a0d8f1)",
      "linear-gradient(to right, #f0f8ff, #2e3b4e)",
    ],
  };

  const validVariant = variantCss[variant] ? variant : "third";
  const endVari = variantCss[validVariant] 
    ? isOn ? variantCss[validVariant][1] : variantCss[validVariant][0]
    : null;

  useEffect(() => {
    if (variant && !variantCss[variant]) {
      setErrorMsg(`${variant} is not a valid variant. Please add from (primary, secondary or third)`);
    } else {
      setErrorMsg("");
    }
  }, [variant]);

  const toggleSwitch = () => setIsOn(!isOn);

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

      <motion.div
        className="w-[170px] h-[100px] rounded-[100px] p-[10px] flex cursor-pointer"
        onClick={toggleSwitch}
        {...props}
        animate={{ background: endVari }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        role="switch"
      >
        <motion.div
          className="w-[80px] h-[80px] bg-white rounded-full shadow-[1px_2px_3px_rgba(0,_0,_0,_0.02)]"
          layout
          animate={{ x: isOn ? 70 : 0 }}
          transition={{
            type: "spring",
            stiffness: 600,
            damping: 60,
          }}
        />
      </motion.div>
    </>
  );
}