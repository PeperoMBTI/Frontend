import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [dataCounts, setDataCounts] = useState({
    E: 0,
    I: 0,
    S: 0,
    N: 0,
    T: 0,
    F: 0,
    J: 0,
    P: 0,
  });

  return (
    <DataContext.Provider value={{ dataCounts, setDataCounts }}>
      {children}
    </DataContext.Provider>
  );
}