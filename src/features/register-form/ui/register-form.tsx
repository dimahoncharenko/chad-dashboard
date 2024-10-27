'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { BrandButton } from '@/shared/ui/brand-button'
import { Stack, Typography } from '@mui/material'
import { TextFieldElement, useForm } from 'react-hook-form-mui'

import { useSessionStore } from '@/entities/session/model/session-store-provider'
import { MOCK_REQUEST_DURATION } from '@/shared/constants'
import { sleep } from '@/shared/lib/utils/async'

type Inputs = {
  email: string
  name: string
  password: string
}

export const RegisterForm = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const { addSession } = useSessionStore(state => state)

  const {
    handleSubmit,

    control,
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  })
  const onSubmit = async (data: Inputs) => {
    setIsLoading(true)

    console.log('Register: ', data)

    await sleep(MOCK_REQUEST_DURATION)
    addSession({
      email: data.email,
      name: data.name,
      loggedIn: false,
      password: data.password,
    })

    router.push('/shopify-connect')
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='mt-8 flex flex-col gap-4'
    >
      <Stack>
        <label
          htmlFor='email'
          className='text-xs/[18px] font-medium -tracking-xs text-blue-800'
        >
          Email
        </label>
        <TextFieldElement
          type='email'
          variant='standard'
          placeholder='megachad@trychad.com'
          name='email'
          required
          control={control}
          slotProps={{
            input: {
              classes: {
                input: '!bg-gray-400 rounded-sm !p-[10px] !pl-[17px]',
              },
            },
          }}
          sx={{
            '& > .MuiInputBase-root::before': {
              border: 0,
            },
            '& > .MuiInputBase-root::after': {
              border: 0,
              outline: 0,
            },
            '& > .MuiInputBase-root': {
              marginTop: '8px',
            },
          }}
          fullWidth
        />
      </Stack>

      <Stack>
        <label
          htmlFor='name'
          className='text-xs/[18px] font-medium -tracking-xs text-blue-800'
        >
          Your name
        </label>
        <TextFieldElement
          type='text'
          variant='standard'
          placeholder='Mega Chad'
          name='name'
          required
          control={control}
          slotProps={{
            input: {
              classes: {
                input: '!bg-gray-400 rounded-sm !p-[10px] !pl-[17px]',
              },
            },
          }}
          sx={{
            '& > .MuiInputBase-root::before': {
              border: 0,
            },
            '& > .MuiInputBase-root::after': {
              border: 0,
              outline: 0,
            },
            '& > .MuiInputBase-root': {
              marginTop: '8px',
            },
          }}
          fullWidth
        />
      </Stack>

      <Stack>
        <label
          htmlFor='password'
          className='text-xs/[18px] font-medium -tracking-xs text-blue-800'
        >
          Password
        </label>
        <TextFieldElement
          type='password'
          variant='standard'
          placeholder='Enter password'
          name='password'
          required
          control={control}
          slotProps={{
            input: {
              classes: {
                input: '!bg-gray-400 rounded-sm !p-[10px] !pl-[17px]',
              },
            },
          }}
          sx={{
            '& > .MuiInputBase-root::before': {
              border: 0,
            },
            '& > .MuiInputBase-root::after': {
              border: 0,
              outline: 0,
            },
            '& > .MuiInputBase-root': {
              marginTop: '8px',
            },
          }}
          fullWidth
        />
      </Stack>

      <BrandButton loading={isLoading} type='submit'>
        Create an account
      </BrandButton>
      <Typography className='text-center !text-xs text-blue-800'>
        Already have an account?{' '}
        <Link href='/login' className='text-blue-500'>
          Login
        </Link>
      </Typography>
    </form>
  )
}
