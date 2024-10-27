'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { BrandButton } from '@/shared/ui/brand-button'
import { NextButton } from '@/shared/ui/next-button'
import { PageDescription } from '@/shared/ui/page-description'
import { PageHeader } from '@/shared/ui/page-header'
import { PrevButton } from '@/shared/ui/prev-button'
import ArrowDown from '@mui/icons-material/ExpandMoreRounded'
import { SelectElement, useForm } from 'react-hook-form-mui'

import { BrandStepper } from '@/widgets/brand-stepper'
import { platforms } from '@/entities/platform/model/data'
import { MOCK_REQUEST_DURATION } from '@/shared/constants'
import { sleep } from '@/shared/lib/utils/async'

export const NoShopifyPage = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      platform: '',
    },
  })

  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const onSubmit = async () => {
    setIsLoading(true)

    await sleep(MOCK_REQUEST_DURATION)

    router.push('/platform-submitted')
  }

  return (
    <>
      <BrandStepper
        displayStep={2}
        maxSteps={4}
        prevBtn={<PrevButton handlePrev={() => router.back()} />}
        nextBtn={<NextButton disabled />}
      />
      <PageHeader shiftDown title='Don’t use Shopify?' />
      <PageDescription description='Chad Beta is currently only available on Shopify. We’ll send you an email when Chad becomes available on your platform.' />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='my-8'>
          <label
            htmlFor='platform'
            className='mb-1 block text-xs/[18px] font-medium -tracking-xs text-blue-800'
          >
            Platform
          </label>
          <SelectElement
            required
            name='platform'
            defaultValue='Platform'
            control={control}
            fullWidth
            slotProps={{
              input: {
                classes: {
                  notchedOutline: '!border-0',
                },
              },
              select: {
                displayEmpty: true,
                renderValue: value => {
                  if (typeof value === 'string') {
                    if (!value.length) {
                      return <span>Select platform</span>
                    }

                    return <span>{value}</span>
                  }
                },
                IconComponent: ArrowDown,
                classes: {
                  root: '!text-gray-100 !py-[10.5px] !text-base/[24px] !-tracking-xs ',
                  outlined: '!py-0 !pl-[17px] !pr-[36px]',
                },
              },
            }}
            options={platforms}
            classes={{
              root: 'bg-gray-400 rounded-sm',
            }}
          />
        </div>
        <BrandButton loading={isLoading} type='submit' className='!mt-0'>
          Submit
        </BrandButton>
        <p className='mt-4 text-center text-xs/[18px] -tracking-xs text-blue-800'>
          Actually use Shopify?{' '}
          <Link href='/shopify-connect' className='text-blue-500'>
            Connect
          </Link>
        </p>
      </form>
    </>
  )
}
