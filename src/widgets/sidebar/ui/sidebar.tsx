'use client'

import { usePathname } from 'next/navigation'
import { NextButton } from '@/shared/ui/next-button'
import { PrevButton } from '@/shared/ui/prev-button'

import { BrandVerticalStepper } from '@/widgets/brand-vertical-stepper'
import { Tips } from '@/widgets/tips'
import { cn } from '@/shared/lib/utils/cn-merge'
import { mapURLToStep } from '../lib/utils'

export const Sidebar = () => {
  const pathname = usePathname()
  const step = mapURLToStep(pathname)

  if (pathname === '/') return null

  return (
    <div className='hidden min-w-[568px] bg-gradient-to-tl from-[#0D3251] to-[#19476C] to-[103.06%] py-[56px] xl:flex xl:flex-col xl:items-center xl:justify-center'>
      <div className='flex flex-1 items-center'>
        <BrandVerticalStepper
          displayStep={step}
          prevBtn={
            <PrevButton
              className={cn(
                'static rounded-sm py-[6px] pl-2 pr-3 !text-blue-600 hover:bg-blue-900',
                step === 0 && 'hidden',
              )}
            />
          }
          nextBtn={
            <NextButton
              disabled
              className={cn(
                'static rounded-sm py-[6px] pl-3 pr-2 !text-blue-600 hover:bg-blue-900',
                step === 0 && 'hidden',
              )}
            />
          }
        />
      </div>
      <div>
        <Tips />
      </div>
    </div>
  )
}
