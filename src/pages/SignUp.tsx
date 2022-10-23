
import { Link } from "react-router-dom"

import { Logo } from "../svgs/Logo"
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline"

import { Heading } from "../components/Heading"
import { Text } from "../components/Text"
import { TextInput } from "../components/TextInput"
import { Button } from "../components/Button"

export function SignUp(){
  return (
    <div className="bg-gray-900 w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="w-[425px] flex flex-col items-center justify-center">
        <header className="flex flex-col items-center gap-4">
          <Logo />
          <Heading size="sm">
            Crie sua conta agora mesmo
          </Heading>
        </header>

        <form className="flex flex-col w-full mt-16 gap-4">
          <label htmlFor="name" className='flex flex-col gap-3'>
            <Text>Como podemos te chamar?</Text>
            <TextInput.Root>
              <TextInput.Input id="name" placeholder="John Doe" />
            </TextInput.Root>
          </label>

          <label htmlFor='email' className='flex flex-col gap-3'>
            <Text>Endereço de e-mail</Text>

            <TextInput.Root>
              <TextInput.Icon>
                <EnvelopeIcon />
              </TextInput.Icon>
              <TextInput.Input id='email' type='email' placeholder='johndoe@example.com' />
            </TextInput.Root>
          </label>

          <label htmlFor='password' className='flex flex-col gap-3'>
            <Text>Sua senha</Text>

            <TextInput.Root>
              <TextInput.Icon>
                <LockClosedIcon />
              </TextInput.Icon>
              <TextInput.Input id='password' type='password' placeholder='**************' />
            </TextInput.Root>
          </label>

          <label htmlFor='confirmPassword' className='flex flex-col gap-3'>
            <Text>Confirme sua senha</Text>

            <TextInput.Root>
              <TextInput.Icon>
                <LockClosedIcon />
              </TextInput.Icon>
              <TextInput.Input id='confirmPassword' type='password' placeholder='**************' />
            </TextInput.Root>
          </label>

          <Button.Root type="submit" className="mt-12">
            <Button.Label value="Criar minha conta" />
          </Button.Root>
        </form>

        <footer className='flex flex-row gap-1 items-center justify-center mt-12'>
          <Text size='sm'>Já possui uma conta?</Text>
          <Text asChild size='sm'>
            <Link to='/' className='cursor-pointer underline'>
              Entre agora
            </Link>
          </Text>
        </footer>
      </div>
    </div>
  )
}