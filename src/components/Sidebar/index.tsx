
import { KeyboardEvent, useContext, useState } from 'react'
import { SignOut, MagnifyingGlass } from 'phosphor-react'
import { firestore } from '../../services/firebaseConnection'
import {
  collection, 
  query, 
  where, 
  getDocs,
  getDoc,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp
} from 'firebase/firestore';

import { AuthContext, UserType } from '../../contexts/AuthContext'

import { Header } from "../Header"
import { TextInput } from "../TextInput"
import { ChatCard } from '../ChatCard'
import { UserChats } from '../UserChats';

export function Sidebar(){
  const { signOut, user } = useContext(AuthContext);
  const [search, setSearch] = useState('');
  const [userSearch, setUserSearch] = useState<UserType | null>(null);

  async function handleSearch(){
    const q = query(
      collection(firestore, "users"),
      where("uid", "==", search)
    )

    const querySnapshot = await getDocs(q);
    if(!querySnapshot.empty){
      querySnapshot.forEach((doc) => {
        let data : UserType = {
          uid: doc.data().uid,
          name: doc.data().name,
          email: doc.data().email,
          avatarUrl: doc.data().avatarUrl
        }
        setUserSearch(data)
      })
    }
  }

  function handleKeyDown(event : KeyboardEvent){
    event.code === 'Enter' && handleSearch();
  }

  async function handleSelectNewConversation(){
    if(user && userSearch){
      const combinedId = user?.uid > userSearch?.uid ? user?.uid + userSearch?.uid : userSearch?.uid + user?.uid

      const res = await getDoc(doc(firestore, "chats", combinedId));

      if(!res.exists()){
        await setDoc(doc(firestore, 'chats', combinedId), { messages: [] });
        await updateDoc(doc(firestore, 'usersChats', user.uid), {
          [combinedId + '.userInfo']: userSearch,
          [combinedId + ".date"]: serverTimestamp(),
        })
        await updateDoc(doc(firestore, 'usersChats', userSearch.uid), {
          [combinedId + '.userInfo']: user,
          [combinedId + ".date"]: serverTimestamp(),
        })
      }
    }

    setUserSearch(null);
    setSearch('');
  }

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
          <TextInput.Input 
            placeholder="Encontre seus amigos" 
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </TextInput.Root>
      </div>

      <div className='overflow-y-auto scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-gray-500'>
        {userSearch && (
          <ChatCard.Root onClick={handleSelectNewConversation} >
            <ChatCard.Image src={userSearch.avatarUrl} />
            <ChatCard.Label title={userSearch.name} />
          </ChatCard.Root>
        )}

        <UserChats />
      </div>
    </div>
  )
}