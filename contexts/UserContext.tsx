import { createContext, useState, ReactNode, useEffect } from "react"; // Import ReactNode
import { account } from "@/utils/appwrite";
import { ID, Models } from "appwrite";
import { asyncHandler } from "@/utils/SafeAsync"; // Ensure this path is correct

type User = Models.User<Models.Preferences>;

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  // Provide async stubs that match the signature
  login: async () => {
    console.warn("Login function not yet implemented in context default");
  },
  register: async () => {
    console.warn("Register function not yet implemented in context default");
  },
  logout: async () => {
    console.warn("Logout function not yet implemented in context default");
  },
});

type UserProviderProps = {
  children: ReactNode; // Use ReactNode directly
};

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null); // Typed useState

  // Wrapped login function
  const login = asyncHandler(async (email: string, password: string) => {
    var session = await account.get();
    if (session) {
      console.log("User is already logged in");
    } else {
      await account.createEmailPasswordSession(email, password);
      session = await account.get();
    }
    setUser(session);
  });

  // Wrapped register function (Optimized)
  const register = asyncHandler(async (email: string, password: string) => {
    console.log("Registering user...");
    await account.create(ID.unique(), email, password);
    console.log("User registered successfully");
    await login(email, password);
  });

  // Wrapped logout function
  const logout = asyncHandler(async () => {
    await account.deleteSession("current");
    setUser(null);
    // console.log("User logged out");
  });


  return (
    <UserContext.Provider value={{ user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
}
