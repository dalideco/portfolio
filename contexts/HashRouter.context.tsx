import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useMemo } from "react";

interface HashRouterContext {
  route: string | null;
  ROUTES: string[];
}

const hashRouterContext = createContext<HashRouterContext>({
  route: null,
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

  const route = useMemo(() => asPath.split("#")[1] || null, [asPath]);

  useEffect(() => {
    if (!route) return;
  }, [route]);

  const value = { route, ROUTES };
  return (
    <hashRouterContext.Provider value={value}>
      {children}
    </hashRouterContext.Provider>
  );
}
