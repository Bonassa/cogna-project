
import { useState, useContext, FormEvent } from "react";
import { firestore } from "../../services/firebaseConnection";
import { arrayUnion, doc, updateDoc, Timestamp } from 'firebase/firestore';

import { ChatContext } from "../../contexts/ChatContext";

import { ArrowRight } from "phosphor-react";
import { Button } from "../Button";
import { TextInput } from "../TextInput";
import { AuthContext } from "../../contexts/AuthContext";

export function MessageSender(){
  const [typedMessage, setTypedMessage] = useState('');
  const { selectedUserUid } = useContext(ChatContext);
  const { user } = useContext(AuthContext)

  async function handleMessageSend(event: FormEvent){
    event.preventDefault();
    if(selectedUserUid){
      await updateDoc(doc(firestore, "chats", selectedUserUid), {
        messages: arrayUnion({
          typedMessage,
          senderId: user?.uid,
          date: Timestamp.now(),
        }),
      });
    }
  }

  return (
    <form className='flex flex-row mt-8 mr-6 mb-6 ml-8' onSubmit={handleMessageSend}>
      <TextInput.Root className='bg-gray-600 mr-3'>
        <TextInput.Input 
          placeholder="Mensagem" 
          value={typedMessage}
          onChange={(e) => setTypedMessage(e.target.value)}
        />
      </TextInput.Root>
      <Button.Root className='rounded-full'>
        <Button.Icon>
          <ArrowRight width={48} size={24} weight='bold' color='#FFF' />
        </Button.Icon>
      </Button.Root>
    </form>
  )
}