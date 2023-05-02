import { createContext } from "react";
import userData from "../userData.json";

const DataContext = createContext();

export function DataProvider({ children }) {
  return <DataContext.Provider value={userData}>{children}</DataContext.Provider>;
}

export default DataContext;
