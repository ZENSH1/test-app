import { createContext, useState, ReactNode, useEffect } from "react"; // Import ReactNode
import { account } from "@/utils/appwrite";
import { ID, Models } from "appwrite";
import { asyncHandler } from "@/utils/SafeAsync"; // Ensure this path is correct

export type User = Models.User<Models.Preferences>;

export const apiStates = {
  idle: 'idle',
  loading: 'loading',
  success: 'success',
}



interface UserContextType {
  user: User | null;
  authCheck:boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  authCheck:false, // Initialize with a default value, or null if you don't need aut
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
  const [authCheck,setAuthCheck] = useState(false);

  //This works but is not the best way to do it, 
  

  // Wrapped login function
  const login = asyncHandler(async (email: string, password: string) => {

    var session = await account.get().catch(() => null);
    if (session) {
      console.log("User is already logged in");
    } else {
      await account.createEmailPasswordSession(email, password);
      session = await account.get();
    }
    console.log("User logged in", session.$id);
    setUser(session);
  });

  // Wrapped register function (Optimized)` 
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
    console.log("User logged out");
  });
  async function getUser() {

    const session = await account.get().catch(() => null);
    if (session) {
      console.log("UserID: ", session.$id);
      setUser(session);
    }
    console.log("State Done");
    setAuthCheck(true);
  }

  //intial state loading
  useEffect(() => {
    getUser()
  }, []);

  return (
    <UserContext.Provider value={{ user, login, register, logout, authCheck  }}>
      {children}
    </UserContext.Provider>
  );
}
