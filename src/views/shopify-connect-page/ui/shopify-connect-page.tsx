'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { BrandButton } from '@/shared/ui/brand-button'
import { NextButton } from '@/shared/ui/next-button'
import { PageDescription } from '@/shared/ui/page-description'
import { PageHeader } from '@/shared/ui/page-header'
import { PrevButton } from '@/shared/ui/prev-button'
import CheckIcon from '@mui/icons-material/Check'

import { BrandListing } from '@/widgets/brand-listing'
import { BrandStepper } from '@/widgets/brand-stepper'
import { MOCK_REQUEST_DURATION } from '@/shared/constants'
import { sleep } from '@/shared/lib/utils/async'

export const ShopifyConnectPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async () => {
    setIsLoading(true)

    await sleep(MOCK_REQUEST_DURATION)
    router.push(`/store-connected?name=${Date.now()}-store`)
  }

  return (
    <>
      <BrandStepper
        displayStep={2}
        maxSteps={4}
        prevBtn={<PrevButton handlePrev={() => router.back()} />}
        nextBtn={<NextButton disabled />}
      />
      <PageHeader shiftDown title='Connect to Shopify Store' />
      <PageDescription description='Installs the Chad widget in your Shopify store and sets it up to display your customers’ order information and self-serve options.' />
      <BrandListing
        items={[
          {
            icon: (
              <CheckIcon classes={{ root: 'text-success !size-6 !mt-1' }} />
            ),
            title: 'Track orders and shipping',
            description: 'Global coverage with 600+ couriers supported',
          },
          {
            icon: (
              <CheckIcon classes={{ root: 'text-success !size-6 !mt-1' }} />
            ),
            title: 'Manage orders',
            description:
              'Allow customers to track, return, exchange, or report problems with their orders',
          },
          {
            icon: (
              <CheckIcon classes={{ root: 'text-success !size-6 !mt-1' }} />
            ),
            title: 'Process returns and exchanges',
            description:
              'Automatically checks your store policy and existing inventory before resolving or escalating each request',
          },
        ]}
      />
      <BrandButton loading={isLoading} onClick={handleSubmit} className='!mt-8'>
        Connect store
      </BrandButton>
      <Link
        className='mt-4 block text-center text-xs/[18px] -tracking-xs text-blue-800'
        href='/no-shopify'
      >{`I don’t use Shopify`}</Link>
    </>
  )
}
