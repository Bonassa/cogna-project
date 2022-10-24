
import { useState, useEffect, useContext } from "react";
import { firestore } from "../../services/firebaseConnection";
import { doc, onSnapshot } from 'firebase/firestore';

import { AuthContext, UserType } from "../../contexts/AuthContext";

import { ChatCard } from "../ChatCard";

export function UserChats() {
  const [userChats, setUserChats] = useState<any[]>([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    function getChats(){
      if(user){
        const unsub = onSnapshot(doc(firestore, 'userChats', user?.uid), (doc) => {
          console.log(doc.data())
        })

        return () => {
          unsub();
        }
      }
    }

    getChats();
  }, [])

  return (
    <>
      <ChatCard.Root>
        <ChatCard.Image src='https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1600' />
        <ChatCard.Label title='Danilo Gomes' subtitle='Depois a gente conversa' />
      </ChatCard.Root>
      <ChatCard.Root>
        <ChatCard.Image src='https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=1600' />
        <ChatCard.Label title='Isabela Matos' subtitle='Lorem Ipsum' />
      </ChatCard.Root>
    </>
  )
}