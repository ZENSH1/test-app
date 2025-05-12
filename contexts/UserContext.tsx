import { Children, createContext, useState } from "react";

interface User {
    id: string;
    email: string;
    // Add other user properties as needed
  }
  
  // Define the context type
  interface UserContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
  }

export const UserContext = createContext<UserContextType>(
    {
        user: null,
        login: async (email: string, password: string) => { },
        register: async (email: string, password: string) => { },
        logout: async () => { }
    }
)

type UserProviderProps = {
    children: React.ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState(null);

    async function login(email: string, password: string) {
        // login logic
        
    }

    async function register(email:string, password:string) {
        // register logic
    }

    async function logout() {
        // logout logic
    }

    

    return (
        <UserContext.Provider value={{ user, login, register, logout }} >
            {children}
        </UserContext.Provider>
    );
}