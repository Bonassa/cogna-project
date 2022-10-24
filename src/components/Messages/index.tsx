
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useContext, useState } from "react";

import { ChatContext } from "../../contexts/ChatContext";
import { firestore } from "../../services/firebaseConnection";

import { Message } from "../Message";

export function Messages(){
  const { selectedUserUid } = useContext(ChatContext);
  const [messages, setMessages] = useState();

  useEffect(() => {
    if(selectedUserUid){
      const unsub = onSnapshot(
        doc(firestore, 'chats', selectedUserUid), (doc) => {
          doc.exists() && setMessages(doc.data().messages);
        }
      )
  
      return () => {
        unsub();
      }
    }
  }, [selectedUserUid])

  console.log(messages);

  return (
    <>
      {/* <div className="messages">
        {messages.map((m) => (
          <Message message={m} key={m.id} />
        ))}
      </div> */}
      <Message sender text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," />
      <Message sender text="Lorem Ipsum" />
      <Message text="Lorem Ipsum" />
      <Message text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," />
      <Message sender text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," />
      <Message sender text="Lorem Ipsum" />
      <Message text="Lorem Ipsum" />
      <Message text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," />
      <Message sender text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," />
      <Message sender text="Lorem Ipsum" />
      <Message text="Lorem Ipsum" />
      <Message text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," />
    </>
  )
}