
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useContext, useState } from "react";

import { ChatContext } from "../../contexts/ChatContext";
import { AuthContext } from "../../contexts/AuthContext";
import { firestore } from "../../services/firebaseConnection";

import { Message } from "../Message";

interface MessageProps {
  typedMessage: string;
  senderId: string;
  date: Date;
}

export function Messages(){
  const { selectedUserUid } = useContext(ChatContext);
  const { user } = useContext(AuthContext);
  const [messages, setMessages] = useState<MessageProps[]>([]);

  useEffect(() => {
    if(selectedUserUid){
      const unsub = onSnapshot(
        doc(firestore, 'chats', selectedUserUid), (doc) => {
          if(doc.exists()){
            let data: MessageProps[] = [
              ...doc.data().messages
            ]

            setMessages(data.reverse());
          }
        }
      )
  
      return () => {
        unsub();
      }
    }
  }, [selectedUserUid])

  return (
    <>
      {messages.map((message, index) => (
        <Message 
          key={index}
          text={message?.typedMessage}
          sender={message.senderId === user?.uid}
        />
      ))}
    </>
  )
}