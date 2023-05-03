import { createContext } from "react";
import userData from "../userData.json";

const isCurrentUser = userData.currentUser.username;
const DataContext = createContext({
  data: userData,
  isCurrentUser: isCurrentUser,
});

export function DataProvider({ children }) {
  return (
    <DataContext.Provider value={{ data: userData, isCurrentUser: isCurrentUser }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
