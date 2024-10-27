'use client'

import ArrowLeft from '@mui/icons-material/NavigateBefore'

import { cn } from '../lib/utils/cn-merge'

type Props = {
  handlePrev?: () => void
  className?: string
}

export const PrevButton = ({ handlePrev, className }: Props) => {
  return (
    <button
      className={cn(
        'absolute top-6 cursor-pointer px-2 text-xs text-blue-800',
        className,
      )}
      onClick={handlePrev}
    >
      <ArrowLeft className='mb-[2px] !size-4' /> Prev
    </button>
  )
}
