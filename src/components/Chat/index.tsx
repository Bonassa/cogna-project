
import { ArrowRight } from 'phosphor-react';

import { Button } from "../Button"
import { Header } from "../Header"
import { Message } from '../Message';
import { TextInput } from "../TextInput"

export function Chat(){
  return(
    <div className="flex flex-[2] flex-col" >
      <Header.Root>
        <Header.Image src="https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        <Header.Label title="Isabela Matos" />
      </Header.Root>

      {/* Não vai poder ser flex-1, tenho que calcular o tamanho e colocar com o width */}
      <div className="flex flex-1 flex-col-reverse gap-2 pt-4 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-500">
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
      </div>

      <form className='flex flex-row mt-8 mr-6 mb-6 ml-8'>
        <TextInput.Root className='bg-gray-600 mr-3'>
          <TextInput.Input placeholder="Mensagem" />
        </TextInput.Root>
        <Button.Root className='rounded-full'>
          <Button.Icon>
            <ArrowRight width={48} size={24} weight='bold' color='#FFF' />
          </Button.Icon>
        </Button.Root>
      </form>
    </div>
  )
}