import { createContext, useState } from "react";
import dataJSON from "../userData.json";

const isCurrentUser = dataJSON.currentUser.username;
const DataContext = createContext({
  data: dataJSON,
  isCurrentUser: isCurrentUser,
  userData: {},
  setUserData: () => {},
});

export function DataProvider({ children }) {
  const [userData, setUserData] = useState(dataJSON);

  return (
    <DataContext.Provider
      value={{ data: dataJSON, isCurrentUser: isCurrentUser, userData, setUserData }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
