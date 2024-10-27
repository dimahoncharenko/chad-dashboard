'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { NextButton } from '@/shared/ui/next-button'
import { PageDescription } from '@/shared/ui/page-description'
import { PageHeader } from '@/shared/ui/page-header'
import { PrevButton } from '@/shared/ui/prev-button'
import CheckIcon from '@mui/icons-material/Check'
import DonutLargeRoundedIcon from '@mui/icons-material/DonutLargeRounded'
import LoadingButton from '@mui/lab/LoadingButton'

import { BrandListing } from '@/widgets/brand-listing'
import { BrandStepper } from '@/widgets/brand-stepper'
import { useSessionStore } from '@/entities/session/model/session-store-provider'
import { MOCK_REQUEST_DURATION } from '@/shared/constants'
import { useGetPlatform } from '@/shared/lib/hooks/useGetPlatform'
import { sleep } from '@/shared/lib/utils/async'
import googleIcon from '@/shared/assets/icons/google-icon.svg'

export const CustomerConnectPage = () => {
  const { addSession, email, name, password } = useSessionStore(state => state)
  const router = useRouter()
  const { isMobile } = useGetPlatform()

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    setIsLoading(true)
    await sleep(MOCK_REQUEST_DURATION)

    if (!isMobile) addSession({ email, name, loggedIn: true, password })
    router.push(isMobile ? '/onboarding-complete-mobile' : '/')
  }

  return (
    <>
      <BrandStepper
        displayStep={3}
        maxSteps={4}
        prevBtn={<PrevButton handlePrev={() => router.back()} />}
        nextBtn={<NextButton disabled />}
      />
      <PageHeader shiftDown title='Connect to customer support email' />
      <PageDescription description='Allows Chad to send automated responses on your behalf from your usual support mailbox' />
      <BrandListing
        items={[
          {
            icon: (
              <CheckIcon classes={{ root: 'text-success !size-6 !mt-1' }} />
            ),
            title: 'Contextual responses',
            description:
              'Custom responses to any support situation from “where’s my stuff?” to “I want a refund”',
          },
          {
            icon: (
              <CheckIcon classes={{ root: 'text-success !size-6 !mt-1' }} />
            ),
            title: 'Reply from anywhere',
            description:
              'Respond to your customers via email or Chad chat—it’s all saved in the same thread',
          },
          {
            icon: (
              <CheckIcon classes={{ root: 'text-success !size-6 !mt-1' }} />
            ),
            title: 'Categorical inbox tags',
            description:
              'Tags your emails by category so you know what to expect before even opening an email',
          },
        ]}
      />
      <LoadingButton
        fullWidth
        onClick={handleSubmit}
        loadingIndicator={
          <DonutLargeRoundedIcon className='ml-12 animate-spin text-white' />
        }
        loading={isLoading}
        startIcon={
          <div className='ml-[3.5px] mr-auto flex size-12 place-content-center rounded-[2px] bg-white xl:ml-[4px]'>
            <Image src={googleIcon} width={18} height={18} alt='Google Icon' />
          </div>
        }
        variant='contained'
        classes={{
          contained:
            '!bg-blue-550 !flex-1 !normal-case !-tracking-xs !shadow-none !text-sm/[21px] !p-0',
          root: '!p-[1px] xl:!pt-[0.8px] !justify-normal !flex !items-center !rounded-[2px] !mt-8',
          label: '!w-full',
        }}
      >
        <span className='block flex-1 text-center'>Connect Gmail account</span>
      </LoadingButton>
      <Link
        href='/no-gmail'
        className='mt-4 block text-center text-xs/[18px] -tracking-xs'
      >
        {`I don't use Gmail`}
      </Link>
    </>
  )
}
