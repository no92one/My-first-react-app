import { createContext, useState } from "react";

const GlobalContext = createContext()

function GlobalProvider({children}) {

  const [number, setNumber] = useState(0)

  return <GlobalContext.Provider
    value={{
      number,
      setNumber
    }}>
    { children }
  </GlobalContext.Provider>

}

export {GlobalContext, GlobalProvider}