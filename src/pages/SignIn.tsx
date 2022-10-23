
import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CheckedState } from '@radix-ui/react-checkbox';

import { Logo } from '../svgs/Logo';
import { GoogleIcon } from '../svgs/GoogleIcon';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';

import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Checkbox } from '../components/Checkbox';
import { Button } from '../components/Button';

export function SignIn(){
  const [checkboxValue, setCheckboxValue] = useState<CheckedState>(false);
  const history = useHistory();

  function handleSubmit(event : FormEvent){
    event.preventDefault();
    history.push('/home');
  }

  return(
    <div className="bg-gray-900 w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="w-[425px]">
        <header className='flex items-center flex-col mb-16'>
          <Logo />
          <Heading size='sm' className='mt-4' >
            Faça login e acesse sua área exclusiva
          </Heading>
        </header>

        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
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

          <div className='flex flex-row justify-between'>
            <label htmlFor='checkbox' className='flex flex-row gap-3 cursor-pointer'>
              <Checkbox id='checkbox' checked={checkboxValue} onCheckedChange={(value) => setCheckboxValue(value)} />
              <Text size='sm'>Lembrar de mim</Text>
            </label>
            <Text asChild size='sm' className='cursor-pointer underline'>
              <a>Esqueceu sua senha?</a>
            </Text>
          </div>

          <Button.Root type='submit' className='mt-6'>
            <Button.Label value='Acessar a plataforma' />
          </Button.Root>
        </form>

        <footer className='flex flex-col mt-6'>
          <div className='flex flex-row items-center gap-5 mx-4'>
            <div className='h-[1px] flex-1 bg-gray-500' />
            <Text size='xsm' className='text-gray-500' >ou</Text>
            <div className='h-[1px] flex-1 bg-gray-500' />
          </div>

          <Button.Root secondary className='mt-6'>
            <Button.Icon>
              <GoogleIcon />
            </Button.Icon>
            <Button.Label value='Entre com o Google' />
          </Button.Root>

          <div className='flex flex-row gap-1 items-center justify-center mt-12'>
            <Text size='sm'>Não tem uma conta?</Text>
            <Text asChild size='sm'>
              <Link to='/register' className='cursor-pointer underline'>
                Crie uma agora
              </Link>
            </Text>
          </div>
        </footer>
      </div>
    </div>
  )
}