'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { BrandButton } from '@/shared/ui/brand-button'
import { Stack, Typography } from '@mui/material'
import { TextFieldElement, useForm } from 'react-hook-form-mui'

import { useSessionStore } from '@/entities/session/model/session-store-provider'
import { MOCK_REQUEST_DURATION } from '@/shared/constants'
import { useGetPlatform } from '@/shared/lib/hooks/useGetPlatform'
import { sleep } from '@/shared/lib/utils/async'

type Inputs = {
  email: string
  password: string
}

export const LoginForm = () => {
  const router = useRouter()
  const { isMobile } = useGetPlatform()
  const { addSession, loggedIn, email, password, name } = useSessionStore(
    state => state,
  )
  const [isLoading, setIsLoading] = useState(false)

  const { handleSubmit, control, setError } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: Inputs) => {
    if (data.email !== email)
      return setError('email', {
        message: 'There is no user with such email',
      })

    if (data.password !== password)
      return setError('password', { message: "Passwords don't match!" })

    setIsLoading(true)
    await sleep(MOCK_REQUEST_DURATION)

    !isMobile &&
      addSession({
        email: data.email,
        name,
        password: data.password,
        loggedIn: true,
      })

    router.push(isMobile ? '/login-success' : '/')
  }

  useEffect(() => {
    loggedIn && router.push('/')
  }, [loggedIn])

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
          classes={{
            root: '!placeholder:text-gray-900',
          }}
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
        Login
      </BrandButton>
      <Typography className='text-center !text-xs text-blue-800'>
        Don't have an account?{' '}
        <Link href='/register' className='text-blue-500'>
          Join the waitlist
        </Link>
      </Typography>
    </form>
  )
}
