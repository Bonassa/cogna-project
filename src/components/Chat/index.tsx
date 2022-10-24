
import { useContext } from 'react';

import { ChatContext } from '../../contexts/ChatContext';

import { ArrowRight } from 'phosphor-react';

import { Button } from "../Button"
import { Header } from "../Header"
import { Messages } from '../Messages';
import { MessageSender } from '../MessageSender';

export function Chat(){
  const { selectedUserUid, selectedUser } = useContext(ChatContext);

  if(!selectedUserUid){
    return (
      <div className="flex flex-[2] flex-col" />
    )
  }

  return(
    <div className="flex flex-[2] flex-col" >
      <Header.Root>
        <Header.Image src={selectedUser.avatarUrl} />
        <Header.Label title={selectedUser.name} />
      </Header.Root>

      {/* Não vai poder ser flex-1, tenho que calcular o tamanho e colocar com o width */}
      <div className="flex flex-1 flex-col-reverse gap-2 pt-4 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500">
        <Messages />
      </div>

      <MessageSender />
    </div>
  )
}