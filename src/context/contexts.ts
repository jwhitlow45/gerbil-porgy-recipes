import { createContext } from "react";

type PathContextType = {
  path: string;
  setPath: (path: string) => void;
};

export const PathContext = createContext<PathContextType>({
  path: "/",
  setPath: () => {},
});
