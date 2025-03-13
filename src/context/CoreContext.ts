import { createContext } from "react";

export interface IMainAppOptions {
    language: string;
    locale: Record<string, any>;
    config?: Record<string, any>;
    isMobile?: boolean;
  }

export type IContext = IMainAppOptions;

export const CoreContext = createContext<IContext>({} as IContext);
export const CoreContextProvider = CoreContext.Provider;
