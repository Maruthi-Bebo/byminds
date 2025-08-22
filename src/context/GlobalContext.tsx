'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalContextType {
  navShow: boolean;
  setNavShow: (show: boolean) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [navShow, setNavShow] = useState(false);

  const value = {
    navShow,
    setNavShow,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
}
