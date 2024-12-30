import React from "react";
import { ImageSourcePropType } from "react-native";

export interface HeaderContextType {
  defaultLeftIcon?: ImageSourcePropType;
  defaultLeftOnPress?: () => void;
}

export const HeaderContext = React.createContext<HeaderContextType | undefined>(
  undefined
);

export const useHeaderContext = () => {
  const context = React.useContext(HeaderContext);
  if (context === undefined) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }
  return context;
};
