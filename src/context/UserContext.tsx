import { createContext, useContext } from 'react';

interface UserContextProps {
  user: boolean;
}

const UserContext = createContext<UserContextProps>({
  user: false,
});

export const useUserContext = () => useContext(UserContext);
