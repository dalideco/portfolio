import Mouse, { MouseElement } from "@/components/Mouse";
import React, { createContext, useContext, useRef, useState } from "react";

interface MouseContext {
  triggerHover: () => void;
  stopHover: () => void;
}

const mouseContext = createContext<MouseContext>({
  triggerHover: () => {},
  stopHover: () => {},
});

export function useMouse() {
  return useContext(mouseContext);
}

export function MouseProvider({ children }: { children: React.ReactNode }) {
  const mouseRef = useRef<MouseElement>(null);

  const triggerHover = () => {
    mouseRef.current?.triggerHover();
  };
  const stopHover = () => {
    mouseRef.current?.stopHover();
  };

  const value = {
    triggerHover,
    stopHover,
  };
  return (
    <mouseContext.Provider value={value}>
      {children}
      <Mouse ref={mouseRef} />
    </mouseContext.Provider>
  );
}
