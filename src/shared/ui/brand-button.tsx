import DonutLargeRoundedIcon from '@mui/icons-material/DonutLargeRounded'
import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton'

import { cn } from '../lib/utils/cn-merge'

type Props = {
  children: React.ReactNode
  className?: string
} & Omit<LoadingButtonProps, 'children' | 'className'>

export const BrandButton = ({ children, className, ...rest }: Props) => {
  return (
    <LoadingButton
      {...rest}
      variant='contained'
      fullWidth
      loadingIndicator={
        <DonutLargeRoundedIcon className='animate-spin text-white' />
      }
      className={cn(
        '!mt-4 !rounded-lg !bg-blue-500 !py-[11px] !text-sm !font-normal !normal-case !shadow-none',
        className,
      )}
    >
      {children}
    </LoadingButton>
  )
}
