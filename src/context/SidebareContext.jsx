import { createContext, useContext, useState } from "react";

const SidebareContext = createContext();

function SidebareProvider({ children }) {
  const [showSidebare, setShowSidebare] = useState(false);
  function toggleSidebare() {
    setShowSidebare((prev) => !prev);
  }

  return (
    <SidebareContext.Provider value={{ showSidebare, toggleSidebare }}>
      {children}
    </SidebareContext.Provider>
  );
}

function useSidebare() {
  const context = useContext(SidebareContext);
  if (context === undefined)
    throw new Error("Sidebare hook is used out side of sidebare provider");

  return context;
}

export { SidebareProvider, useSidebare };
