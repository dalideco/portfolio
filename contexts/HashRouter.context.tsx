import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useMemo } from "react";

interface HashRouterContext {
  currentRoute: string | null;
  ROUTES: string[];
}

const hashRouterContext = createContext<HashRouterContext>({
  currentRoute: null,
  ROUTES: [],
});

export function useHashRouter() {
  return useContext(hashRouterContext);
}

const ROUTES = [
  "about",
  "experience",
  "projects",
  "education",
  "skill",
  "contact",
];

export function HashRouterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { asPath } = useRouter();

  const currentRoute = useMemo(() => asPath.split("#")[1] || null, [asPath]);

  useEffect(() => {
    if (!currentRoute) return;
  }, [currentRoute]);

  const value = { currentRoute, ROUTES };
  return (
    <hashRouterContext.Provider value={value}>
      {children}
    </hashRouterContext.Provider>
  );
}
