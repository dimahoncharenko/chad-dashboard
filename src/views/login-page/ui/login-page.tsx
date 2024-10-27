'use client'

import { PageDescription } from '@/shared/ui/page-description'
import { PageHeader } from '@/shared/ui/page-header'

import { LoginForm } from '@/features/login-form'

export const LoginPage = () => {
  return (
    <>
      <PageHeader title='Welcome back' />
      <PageDescription description='Feeling ready to take on the day? Chad is too!' />
      <LoginForm />
    </>
  )
}
