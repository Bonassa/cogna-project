
import { useState, useEffect, useContext } from "react";
import { firestore } from "../../services/firebaseConnection";
import { doc, onSnapshot } from 'firebase/firestore';

import { AuthContext } from "../../contexts/AuthContext";
import { ChatContext } from "../../contexts/ChatContext";

import { ChatCard } from "../ChatCard";

interface ContactProps {
  data: any;
  combinedUid: string;
}

export function UserChats() {
  const [userChats, setUserChats] = useState<any[]>([]);
  const { user } = useContext(AuthContext);
  const { setSelectedUserUid, setSelectedUser } = useContext(ChatContext);

  useEffect(() => {
    if(user){
      const unsub = onSnapshot(
        doc(firestore, 'usersChats', user.uid), (doc) => {
          setUserChats(doc.data() as any[])
        }
      )

      return () => {
        unsub();
      }
    }
  }, [])

  function handleContactSelected({ combinedUid, data }: ContactProps){
    setSelectedUser(data);
    setSelectedUserUid(combinedUid);
  }

  return (
    <>
      {Object.entries(userChats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
        <ChatCard.Root key={chat[0]} onClick={() => handleContactSelected({
          combinedUid: chat[0],
          data: chat[1].userInfo
        })} >
          <ChatCard.Image src={chat[1].userInfo.avatarUrl} />
          <ChatCard.Label title={chat[1].userInfo.name} subtitle={chat[1].userInfo.lastMessage?.text} />
        </ChatCard.Root>
      ))}
    </>
  )
}