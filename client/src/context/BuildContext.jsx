import { createContext, useState } from "react";

// Create a context to manage the keyboard build state
export const BuildContext = createContext();

/**
 * BuildProvider
 * Provides build state and total price to all children components.
 */
export function BuildProvider({ children }) {
  // State for the current keyboard build
  const [build, setBuild] = useState({
    size: null,
    switchType: null,
    keycap: null,
    cable: null,
    accessories: [],
  });

  // Compute the total price dynamically based on selected parts
  const total = [
    build.size,
    build.switchType,
    build.keycap,
    build.cable,
    ...build.accessories,
  ]
    .filter(Boolean) // Remove any unselected parts (null)
    .reduce((sum, part) => sum + part.price, 0);

  return (
    <BuildContext.Provider value={{ build, setBuild, total }}>
      {children}
    </BuildContext.Provider>
  );
}
