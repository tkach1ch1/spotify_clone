import { createContext, useContext } from 'react';

interface UserContextProps {
  user: boolean;
}

const UserContext = createContext<UserContextProps>({
  user: true,
});

export const useUserContext = () => useContext(UserContext);
