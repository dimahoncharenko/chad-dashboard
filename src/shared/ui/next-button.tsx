'use client'

import ArrowRight from '@mui/icons-material/NavigateNext'

import { cn } from '../lib/utils/cn-merge'

type Props = {
  handleNext?: () => void
  disabled?: true
  className?: string
}

export const NextButton = ({ handleNext, disabled, className }: Props) => {
  return (
    <button
      onClick={handleNext}
      disabled={disabled}
      className={cn(
        'absolute right-0 top-6 cursor-pointer px-2 text-xs text-blue-800 disabled:text-gray-100',
        className,
      )}
    >
      Next
      <ArrowRight className='mb-[2px] !size-4' />
    </button>
  )
}
