import React, { createContext, useContext } from "react";

interface HashRouterContext {}

const hashRouterContext = createContext<HashRouterContext>({});

export function useHashRouter() {
  return useContext(hashRouterContext);
}

export function HashRouterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const value = {};
  return (
    <hashRouterContext.Provider value={value}>
      {children}
    </hashRouterContext.Provider>
  );
}
