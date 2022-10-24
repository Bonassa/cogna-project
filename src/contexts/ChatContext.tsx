
import { createContext, useState } from "react";

interface ChatContextProps {
  selectedUserUid: string | null;
  setSelectedUserUid: React.Dispatch<React.SetStateAction<string | null>>;
  selectedUser: any | null;
  setSelectedUser: React.Dispatch<React.SetStateAction<any | null>>;
}

interface ChatProviderProps {
  children: React.ReactNode;
}

export const ChatContext = createContext({} as ChatContextProps);

export function ChatProvider({ children } : ChatProviderProps){
  const [selectedUserUid, setSelectedUserUid] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  return (
    <ChatContext.Provider
      value={{
        selectedUserUid,
        setSelectedUserUid,
        selectedUser,
        setSelectedUser
      }}
    >
      { children }
    </ChatContext.Provider>
  )
}