import { createContext, useContext, useState } from "react";
interface ContextProps {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
const LoadingContext = createContext<ContextProps>({
  loading: false,
  setLoading: () => {},
});

interface ProviderProps {
  children: React.ReactNode;
}
export const LoadingProvider = ({ children }: ProviderProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
export const Loading = () => useContext(LoadingContext);
