import React, { createContext, useContext, useState } from "react";

type UserSchema = {
  email: string;
  password: string;
  setting: {
    lang: string;
  };
};
interface AuthSchema {
  user: UserSchema | null;
  setUser: React.Dispatch<React.SetStateAction<UserSchema | null>>;
  login: (user: UserSchema) => void;
  logOut: () => void;
}
const AuthContext = createContext<AuthSchema>({
  user: null,
  setUser: () => {},
  login: () => {},
  logOut: () => {},
});
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserSchema | null>(null);
  const login = (user: UserSchema) => setUser(user);
  const logOut = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider value={{ user, setUser, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export const auth = () => useContext(AuthContext);

export default AuthProvider;
