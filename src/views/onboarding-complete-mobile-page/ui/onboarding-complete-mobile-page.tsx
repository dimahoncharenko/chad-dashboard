import Image from 'next/image'
import { BrandButton } from '@/shared/ui/brand-button'
import { Typography } from '@mui/material'

import OK from '@/shared/assets/gifs/ok-animated.gif'

export const OnboardingCompleteMobilePage = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <div className='page-wrapper flex flex-col items-center justify-center'>
        <div className='relative h-[100px] w-full py-24'>
          <Image src={OK} fill alt='' className='object-none' unoptimized />
        </div>
        <Typography
          variant='h3'
          classes={{
            h3: '!text-base/[19.2px] !font-medium !-tracking-sm !mb-2',
          }}
        >
          {`You’re ready to go!`}
        </Typography>
        <Typography
          variant='caption'
          classes={{
            caption:
              '!text-blue-800 !text-sm/[21px] !max-w-[326px] !md:max-w-[392px] !tracking-xs text-center',
          }}
        >
          {`Chad doesn’t support mobile browsers. To access your dashboard, login from your laptop or desktop computer.`}
        </Typography>
        <BrandButton href='/login' className='max-w-[326px] md:max-w-[392px]'>
          Ok
        </BrandButton>
      </div>
    </div>
  )
}
