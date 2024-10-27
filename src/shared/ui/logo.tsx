import Image from 'next/image'

import { eudoxus } from '@/app/layout'
import LogoIcon from '@/shared/assets/logo/logo.svg'
import { cn } from '../lib/utils/cn-merge'

export const Logo = () => {
  return (
    <div className='flex items-center gap-[2px]'>
      <Image src={LogoIcon} width={32} height={32} alt='Chad Logo' />
      <span
        className={cn(
          '-tracking-xs text-2xl font-bold text-blue-900',
          eudoxus.className,
        )}
      >
        Chad
      </span>
    </div>
  )
}
