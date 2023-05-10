// import { createContext, useState } from "react";
// import dataJSON from "../userData.json";

// const isCurrentUser = dataJSON.currentUser.username;
// const DataContext = createContext({
//   data: dataJSON,
//   isCurrentUser: isCurrentUser,
//   userData: {},
//   setUserData: () => {},
// });

// export function DataProvider({ children }) {
//   const [userData, setUserData] = useState(dataJSON);

//   function searchForObject(obj, id) {
//     for (let key in obj) {
//       if (key === "id" && obj[key] === id) {
//         return obj;
//       } else if (typeof obj[key] === "object" && obj[key] !== null) {
//         const result = searchForObject(obj[key], id);
//         if (result !== null) {
//           return result;
//         }
//       }
//     }
//     return null;
//   }

//   return (
//     <DataContext.Provider
//       value={{
//         data: dataJSON,
//         isCurrentUser: isCurrentUser,
//         userData,
//         setUserData,
//         searchForObject,
//       }}
//     >
//       {children}
//     </DataContext.Provider>
//   );
// }

// export default DataContext;

import { createContext, useEffect, useState } from "react";
import dataJSON from "../userData.json";

const isCurrentUser = dataJSON.currentUser.username;

const initialUserData = localStorage.getItem("userData")
  ? JSON.parse(localStorage.getItem("userData"))
  : dataJSON;

const DataContext = createContext({
  data: dataJSON,
  isCurrentUser: isCurrentUser,
  userData: {},
  setUserData: () => {},
});

export function DataProvider({ children }) {
  const [userData, setUserData] = useState(initialUserData);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  function searchForObject(obj, id) {
    for (let key in obj) {
      if (key === "id" && obj[key] === id) {
        return obj;
      } else if (typeof obj[key] === "object" && obj[key] !== null) {
        const result = searchForObject(obj[key], id);
        if (result !== null) {
          return result;
        }
      }
    }
    return null;
  }

  return (
    <DataContext.Provider
      value={{
        data: dataJSON,
        isCurrentUser: isCurrentUser,
        userData,
        setUserData,
        searchForObject,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
