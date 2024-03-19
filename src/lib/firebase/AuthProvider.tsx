import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';

type AuthContextType = {
  currentUser: null | object; // Use a more specific type if possible, e.g., User
  setCurrentUser: (user: null | object) => void;
  // loading: boolean;
};


const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  setCurrentUser: () => null,
  // loading: true,
});

export const useAuth = () => useContext(AuthContext);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<null | object>(null);
  // const [loading, setLoading] = useState(false);
  console.log('currentUser', currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      // setLoading(false);
    });
    console.log('currentUser', currentUser);

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
