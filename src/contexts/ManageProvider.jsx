/* eslint-disable react/prop-types */
import useScreenSize from '../hooks/useScreenSize'
import { useContext, useEffect, useState } from "react"
import { createContext } from 'react';



const ManageContext = createContext();

function MaangeProvider({ children }) {
    const [isMobile, setIsMobile] = useState(null);
  const screenSize = useScreenSize()

  useEffect(
    function () {
      setIsMobile(screenSize.width <= 1000);
    },
    [screenSize.width]
  );

  return (
    <ManageContext.Provider
      value={{
        isMobile
      }}
    >
      {children}
    </ManageContext.Provider>
  );
}

function useManage() {
  const context = useContext(ManageContext);
  if (context === undefined)
    throw new Error("bankContext was used outside the EasyBankProvider");
  return context;
}

export { MaangeProvider, useManage };