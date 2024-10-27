import { PageDescription } from '@/shared/ui/page-description'
import { PageHeader } from '@/shared/ui/page-header'

import { BrandStepper } from '@/widgets/brand-stepper'
import { RegisterForm } from '@/features/register-form'

export const RegisterPage = () => {
  return (
    <>
      <BrandStepper displayStep={1} maxSteps={4} />
      <PageHeader title='Welcome to Chad' />
      <PageDescription
        description='Go live in 10 minutes! Our self-service widget empowers your customers
        to manage orders and track shipments 24/7 without driving you crazy.'
      />
      <RegisterForm />
    </>
  )
}
