'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { BrandButton } from '@/shared/ui/brand-button'
import { Typography } from '@mui/material'

import { MOCK_REQUEST_DURATION } from '@/shared/constants'
import { sleep } from '@/shared/lib/utils/async'
import shopifyAvatar from '@/shared/assets/images/shopify-avatar.png'

export const StoreConnectedPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const params = useSearchParams()
  const storeName = params.get('name')

  const handleClick = async () => {
    setIsLoading(true)

    await sleep(MOCK_REQUEST_DURATION)
    router.push('/customer-connect')
  }

  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <div className='page-wrapper flex flex-col items-center'>
        <Image src={shopifyAvatar} alt='' width={80} height={82.5} />
        <Typography
          variant='h3'
          classes={{
            h3: '!text-base/[19.2px] !mt-8 !font-medium !-tracking-sm !mb-2',
          }}
        >
          Store Connected
        </Typography>
        <Typography
          variant='caption'
          classes={{
            caption:
              '!text-blue-800 !text-sm/[21px] !-tracking-xs text-center !max-w-[326px] !md:max-w-[392px]',
          }}
        >
          {`Chad is now able to manage customer support requests for ${storeName}.`}
        </Typography>
        <BrandButton
          onClick={handleClick}
          loading={isLoading}
          className='!md:max-w-[392px] !max-w-[326px]'
        >
          Continue
        </BrandButton>
        <p className='mt-4 text-xs/[18px] -tracking-xs text-blue-800'>
          Wrong store?{' '}
          <Link href='/shopify-connect' className='text-blue-500'>
            Connect another one
          </Link>
        </p>
      </div>
    </div>
  )
}
