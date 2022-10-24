
import { SignOut, MagnifyingGlass } from 'phosphor-react'
import { useContext } from 'react'

import { AuthContext } from '../../contexts/AuthContext'

import { Header } from "../Header"
import { TextInput } from "../TextInput"
import { ChatCard } from '../ChatCard'

export function Sidebar(){
  const { signOut, user } = useContext(AuthContext);

  return (
    <div className="flex flex-col flex-1 border-r-2 border-gray-500">
      <Header.Root>
        <Header.Image src={user?.avatarUrl} />
        <Header.Label title={user?.name as string} subtitle={user?.uid} />
        <Header.Icon type='button' onClick={signOut}>
          <SignOut size={24} weight='bold' />
        </Header.Icon>
      </Header.Root>

      <div className="px-3 pt-4 pb-6">
        <TextInput.Root className="bg-gray-600 !px-3 !py-2">
          <TextInput.Icon>
            <MagnifyingGlass />
          </TextInput.Icon>
          <TextInput.Input placeholder="Encontre seus amigos" />
        </TextInput.Root>
      </div>

      <div className='overflow-y-auto scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-500'>
        <ChatCard.Root>
          <ChatCard.Image src='https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1600' />
          <ChatCard.Label title='Danilo Gomes' subtitle='Depois a gente conversa' />
        </ChatCard.Root>
        <ChatCard.Root>
          <ChatCard.Image src='https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=1600' />
          <ChatCard.Label title='Isabela Matos' subtitle='Lorem Ipsum' />
        </ChatCard.Root>
      </div>
    </div>
  )
}