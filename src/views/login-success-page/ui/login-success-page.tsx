import Image from 'next/image'
import { BrandButton } from '@/shared/ui/brand-button'
import { Button, Typography } from '@mui/material'

import OK from '@/shared/assets/gifs/ok-animated.gif'

export const LoginSuccessPage = () => {
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
          Use your desktop to access Chad
        </Typography>
        <Typography
          variant='caption'
          classes={{
            caption:
              '!text-blue-800 !text-sm/[21px] !max-w-[326px] !md:max-w-[396px] !tracking-xs text-center',
          }}
        >
          {`Chad doesn’t support mobile browsers. To access your dashboard, login from your laptop or desktop computer.`}
        </Typography>
        <BrandButton
          fullWidth
          href='/login'
          className='!md:max-w-[396px] !max-w-[326px]'
        >
          Ok
        </BrandButton>
        <p className='-tracking-xs mt-2 inline-flex items-baseline text-xs/[18px] text-blue-800'>
          Not xyz@triceps.com?{' '}
          <Button
            variant='text'
            classes={{
              text: '!normal-case !ml-1 !p-0 !font-normal !text-xs !text-blue-500 !-tracking-xs !justify-start',
            }}
          >
            Logout
          </Button>
        </p>
      </div>
    </div>
  )
}
