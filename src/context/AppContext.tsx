import React, { Context, createContext, ReactNode, useContext } from "react";
import { AppContextValue } from "../types";

export const AppContext: Context<AppContextValue> = createContext({});

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({
  children,
  value,
}: {
  children: ReactNode;
  value: AppContextValue;
}) {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
