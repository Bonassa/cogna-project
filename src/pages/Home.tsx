
import { Sidebar } from "../components/Sidebar"
import { Chat } from "../components/Chat"

export function Home(){

  return (
    <div className="h-[100vh] w-[100vw] bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg w-[1200px] h-[785px] flex flex-row overflow-hidden">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}