import { ReactNode, createContext, useState } from "react";

interface User {
  userName: string;
  password: string;
}

export type AuthContextDataProps = {
  user: User;
  signIn: (userName: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<User>({} as User);

  async function signIn(userName: string, password: string) {
    if (userName === "user" && password === "123") {
      setUser({ userName, password });
      return true;
    }
    return false;
  }

  async function signOut() {
    try {
    } catch (error) {
      throw error;
    } finally {
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
